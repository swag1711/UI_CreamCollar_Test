import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Blogpagination = () => {
	const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
	const [blogPosts, setBlogPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);
	const [BlogView,setBlogView] =useState('Grid');
	
    function Selectview (viewname){
		// alert(viewname)
		setBlogView(viewname)
		
	}


	// useEffect(() => {
	// 	const fetchBlogPosts = async () => {
	// 		const { posts } = await request(
	// 			'https://api-us-east-1.graphcms.com/v2/cl3zo5a7h1jq701xv8mfyffi4/master',
	// 			`
	// 		{ 
	// 			posts {
	// 				id
	// 				title
	// 				excert
	// 				postUrl
	// 				cover {
	// 				  url
	// 				}
	// 				datePublished
	// 				author {
	// 				  firstName
	// 				  profilePicture {
	// 					 url
	// 				  }
	// 				}
	// 			 }
	// 		}
	// 	 `
	// 		);

	// 		setBlogPosts(posts);
	// 	};

	// 	fetchBlogPosts();
	// }, []);
    

// 	useEffect(() => {
// 		const fetchBlogPosts = async () => {
// 			const { posts } = {"posts":[
// 				{
// 				  id: '1',
// 				  domain_name: 'Data Science',
// 				  topics: 'Python For Beginnertttttttttttttttttttttttttttttttttttttttttttttttttttttttttt sfjsjf  sfjhsajfsjfjfjsj nfjsajfjsfjs nssfhsdjfdfjdsjf nsfjsfsfjsj nsjfjfjefjd ssnfjsdjfh',
// 				  blog_picture: null,
// 				  blog_content: 'As you delve into Python, focus on mastering the basics, including variables, data types, conditionals, and loops. Embrace the power of functions and modular programming to break down complex tasks into manageable pieces. Practice is key, so embark on small projects, explore libraries, and gradually delve into more advanced topics like object-oriented programming and data manipulation. In this process, donot forget to reference Python rich documentation and seek help from the thriving online community. Your Python adventure is just beginning, and with dedication, the possibilities are endless.',
// 				  content_owner: 'vijay',
// 				  Reference_link: null,
// 				  created_data: 2023-11-14,
// 				  last_updated_by: 'vijay'
// 				},
// 				{
// 				  id: '2',
// 				  domain_name: 'Data Science',
// 				  topics: 'Statistics for Data Science with Python',
// 				  blog_picture: null,
// 				  blog_content: 'Write Python code to conduct various statistical tests including a T test, an ANOVA, and regression analysis. Interpret the results of your statistical analysis after conducting hypothesis testing. Calculate descriptive statistics and visualization by writing Python code.Create a final project that demonstrates your understanding of various statistical test using Python and evaluate your peers projects.  ',
// 				  content_owner: 'vijay',
// 				  Reference_link: null,
// 				  created_data: 2023-11-14,
// 				  last_updated_by: 'vijay'
// 				},
// 				{
// 				  id: '3',
// 				  domain_name: 'Data Science',
// 				  topics: 'Data Science: Machine Learning',
// 				  blog_picture: null,
// 				  blog_content: 'You will learn about training data, and how to use a set of data to discover potentially predictive relationships. As you build the movie recommendation system, you will learn how to train algorithms using training data so you can predict the outcome for future datasets. You will also learn about overtraining and techniques to avoid it such as cross-validation. All of these skills are fundamental to machine learning.',
// 				  content_owner: 'vijay',
// 				  Reference_link: null,
// 				  created_data: 2023-11-14,
// 				  last_updated_by: 'vijay'
// 				},
// 				{
// 				  id: '4',
// 				  domain_name: 'Data Science',
// 				  topics: 'Role And Impact Of Deep Learning In Data Science',
// 				  blog_picture: null,
// 				  blog_content: 'If you find a world in which deep learning might take over from commonly used data science techniques, it won’t be a surprise. Yes! In this world, technology is still under development, and its not just algorithms that learn – the entire system does! The field is still in its infancy and growing, the underlying maths could be challenging and complex to understand. Still, prominent data scientists can run their programs on neural networks without much worry about their work. The blog will help us understand Deep Learning and how to bring deep learning into practice in the field of data science.',
// 				  content_owner: 'vijay',
// 				  Reference_link: null,
// 				  created_data: 2023-11-14,
// 				  last_updated_by: 'vijay'
// 				}
// 			  ]};
			  
// console.log(posts);
// 			setBlogPosts(posts);
// 		};

// 		fetchBlogPosts();
// 	}, []);
	
// 	useEffect(() => {
// 		const fetchBlogPosts = async () => {
// 			const { posts } = await request(
// 				'http://localhost:3000/blog',``
// 			);
// console.log(posts);
// 			setBlogPosts(posts);
// 		};

// 		fetchBlogPosts();
// 	}, []);

useEffect(() => {
    fetch(`${nodeapiBaseUrl}:5000/blog`)
      .then(response => response.json())
      .then(data => setBlogPosts(data.posts))
      .catch(error => console.error('Error:', error));
  }, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<div className="container10 totalblogcontainer">
			
				<div className='viewbtn'> 
				<button className='p-2' style={{backgroundColor: '#f5f8fb'}}  onClick={()=>Selectview("Grid")}>
				<i className={`bi bi-grid-3x3-gap-fill ${BlogView=='Grid' ? 'gridactive' : 'none'}`}></i>
					
				</button>
				<button className='p-2' style={{backgroundColor: '#f5f8fb'}} onClick={()=>Selectview("List")}>
				<i className={`bi bi-list ${BlogView!='Grid' ? 'listactive' : 'none'}`}></i>
					
				</button>  
       
					</div>
			
			{blogPosts ? BlogView==='Grid'?(
				<div className="blog-content-section">
					<div className="blog-container">
						{currentPosts.map((currentPost) => (
							<div className="blog-post" key={currentPost.id}  data-bs-toggle="modal" data-bs-target={'#'+currentPost.id}>
								<img className="cover-img" src={currentPost.blog_picture} alt="" />
								<h2 className="title">{currentPost.topics}</h2>

								<div className="description">{currentPost.blog_content}</div>
								<div className="card-details">
									<div className="lh-details">
										
										<p className="date">
											{new Date(
												`${currentPost.created_data}`
											).toLocaleDateString('en-us', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</p>
                                        <p>{currentPost.domain_name}</p>
										{/* <a href='#' >Read More</a> */}
									</div>
                              
									
								</div>
							</div>

						))}
					</div>
					<ReactPaginate
						onPageChange={paginate}
						pageCount={Math.ceil(blogPosts.length / postsPerPage)}
						previousLabel={'Prev'}
						nextLabel={'Next'}
						containerClassName={'pagination'}
						pageLinkClassName={'page-number'}
						previousLinkClassName={'page-number'}
						nextLinkClassName={'page-number'}
						activeLinkClassName={'active'}
					/>
					
				</div>
			):(
				/*List view Area*/
				<div className="blog-content-section">
					<div className='desktoplistcontainer'>
						{currentPosts.map((currentPost) => (
							<div className="row widthcontainer" data-bs-toggle="modal" data-bs-target={'#'+currentPost.id}>
								<div className="col-12 bloglistviewcontainer">
				<div className="row ">
					
					<img className="col-md-2" src={currentPost.blog_picture} alt=""  />
					
					<div className="col-md-8">
					<div className='Blogmobilelistheading'>{currentPost.topics}</div>

                    <p className='Desktopview Blogdesktoplistcontent'>{currentPost.blog_content}</p>
					</div>
					<div className="col-md-2 Desktopview">
					<p >
											{new Date(
												`${currentPost.created_data}`
											).toLocaleDateString('en-us', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</p>
                                        <p>Developer</p>
					</div>
				</div>
				<div className="row Mobileview blogcontent2">
					<div className='col-md-12  containoverflow'>
					<div className='Blogcontentlistview'>{currentPost.blog_content}</div>
					</div>
				</div>
				<div className='row Mobileview blogcontent3'>
				<div className="card-details">
									<div className="lh-details">
										
										<p className="date">
											{new Date(
												`${currentPost.created_data}`
											).toLocaleDateString('en-us', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</p>
                                        <p>Developer</p>
									</div>
									
								</div>
				</div>
				
				</div></div>
						))}
						</div>
						<ReactPaginate
						onPageChange={paginate}
						pageCount={Math.ceil(blogPosts.length / postsPerPage)}
						previousLabel={'Prev'}
						nextLabel={'Next'}
						containerClassName={'pagination'}
						pageLinkClassName={'page-number'}
						previousLinkClassName={'page-number'}
						nextLinkClassName={'page-number'}
						activeLinkClassName={'active'}
					/>
						</div>

			): (
				<div className="loading">Loading...</div>
			)}
			{/* start */}
			{currentPosts.map((currentPost) => (  
			<div className="modal fade" id={currentPost.id} tabIndex="-1" aria-labelledby={'Label'+currentPost.id} aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered">
		  <div className="modal-content">      
			<div className="modal-body p-0">
			 <div className="leader-list">
					<div className="leader-header">
					 
					  <div className="leader-title">
						<h6>{currentPost.topics}</h6>
					   
					  </div>
					</div>
					<div className="leader-body">
						<div className="alignblogimg">
					<div className="modelblog-img"> <img src={currentPost.blog_picture} alt="" /> </div>
					</div>
					{/*   <p>Shrikanth Jaganathan is a seasoned leader with over two decades experience in data science solutions and products. He was the chief data scientist for PipeCandy, an ecommerce market intelligence product startup that he cofounded and successfully exited. With his expertise in data science and leadership style, he is a go-to mentor for career progression and achieving product team performance. He has also served in leadership roles to set up and grow data science CoEs and delivery practices with global IT services majors.sfhsafdfdjhfjhdjjdhdh dfjdhffidhdhh nfjuijkm, smmnshf ssnjfskdd,s ,mfdkjkdfm,dkfm    f e nffsjnflfdnfjdjndjdndjhdnkndjhjndmd   nfeedmfndj Shrikanth Jaganathan is a seasoned leader with over two decades experience in data science solutions and products. He was the chief data scientist for PipeCandy, an ecommerce market intelligence product startup that he cofounded and successfully exited. With his expertise in data science and leadership style, he is a go-to mentor for career progression and achieving product team performance. He has also served in leadership roles to set up and grow data science CoEs and delivery practices with global IT services majors.sfhsafdfdjhfjhdjjdhdh dfjdhffidhdhh nfjuijkm, smmnshf ssnjfskdd,s ,mfdkjkdfm,dkfm    f e nffsjnflfdnfjdjndjdndjhdnkndjhjndmd   nfeedmfndj Shrikanth Jaganathan is a seasoned leader with over two decades experience in data science solutions and products. He was the chief data scientist for PipeCandy, an ecommerce market intelligence product startup that he cofounded and successfully exited. With his expertise in data science and leadership style, he is a go-to mentor for career progression and achieving product team performance. He has also served in leadership roles to set up and grow data science CoEs and delivery practices with global IT services majors.sfhsafdfdjhfjhdjjdhdh dfjdhffidhdhh nfjuijkm, smmnshf ssnjfskdd,s ,mfdkjkdfm,dkfm    f e nffsjnflfdnfjdjndjdndjhdnkndjhjndmd   nfeedmfndj Shrikanth Jaganathan is a seasoned leader with over two decades experience in data science solutions and products. He was the chief data scientist for PipeCandy, an ecommerce market intelligence product startup that he cofounded and successfully exited. With his expertise in data science and leadership style, he is a go-to mentor for career progression and achieving product team performance. He has also served in leadership roles to set up and grow data science CoEs and delivery practices with global IT services majors.sfhsafdfdjhfjhdjjdhdh dfjdhffidhdhh nfjuijkm, smmnshf ssnjfskdd,s ,mfdkjkdfm,dkfm    f e nffsjnflfdnfjdjndjdndjhdnkndjhjndmd   nfeedmfndj</p>*/}
					{currentPost.blog_content}
					</div>
					<div className="leader-footer">
					  <ul className="leaders-links">
						
					  </ul>
					  <a href='#' className="read-more" data-bs-dismiss="modal">Close</a> </div>
				  </div> 
			</div>      
		  </div>
		</div>
		</div>
		))}
			{/* stop */}
		</div>
	);
};

export default Blogpagination;
