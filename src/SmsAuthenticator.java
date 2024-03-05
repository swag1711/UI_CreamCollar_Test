import com.twilio.Twilio;
import com.twilio.rest.verify.v2.service.Verification;
import com.twilio.rest.verify.v2.service.VerificationCheck;
import com.twilio.verify.v2.service.VerificationClient;
import org.jboss.resteasy.spi.ResteasyProviderFactory;
import org.keycloak.authentication.AuthenticationContext;
import org.keycloak.authentication.authenticators.AbstractFormAuthenticator;
import org.keycloak.common.util.Time;
 
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import java.util.Date;
 
public class SmsAuthenticator extends AbstractFormAuthenticator {
 
    private static final String ACCOUNT_SID = "AC6af8cded9625c4165321ed2923f1885e";
    private static final String AUTH_TOKEN = "0e602361edc47a0e851a1b7b56a505c7";
    private static final String SERVICE_SID = "USbefa23c92b535ba16d89cc92dd9eb814";
 
    @POST
    public void authenticate(AuthenticationContext context) {
        String phoneNumber = context.getHttpRequest().getFormData().get("phoneNumber");
        String verificationCode = context.getHttpRequest().getFormData().get("verificationCode");
 
        if (phoneNumber == null || verificationCode == null) {
            context.failure(CoreMessage.INVALID_CREDENTIALS);
            return;
        }
 
        Twilio.setCredentials(ACCOUNT_SID, AUTH_TOKEN);
        VerificationClient verifyClient = new VerificationClient(SERVICE_SID);
 
        // Send verification code if not already sent
        if (!isVerificationCodeSent(phoneNumber)) {
            verifyClient.verify(phoneNumber, "sms");
        }
 
        // Verify confirmation code
        VerificationCheck verificationCheck = verifyClient.verifyCheck(phoneNumber, verificationCode);
        if (verificationCheck.getStatus() == VerificationCheck.Status.APPROVED) {
            context.success();
        } else {
            context.failure(CoreMessage.INVALID_CREDENTIALS);
        }
    }
 
    private boolean isVerificationCodeSent(String phoneNumber) {
        // Implement logic to check if verification code has been sent to the user
        Date lastVerificationTime = getLastVerificationTime(phoneNumber);
        return lastVerificationTime != null && Time.currentTimeMillis() - lastVerificationTime.getTime() < 300000;
    }
 
    private Date getLastVerificationTime(String phoneNumber) {
        // Implement logic to retrieve the last verification time for the user
        return new Date(); // Replace with actual retrieval logic
    }
}