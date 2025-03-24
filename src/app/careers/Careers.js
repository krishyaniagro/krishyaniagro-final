"use client";
import React, { useState } from "react";
import styles from "./Careers.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { useLanguage } from "@/app/languagecontext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Careers() {
	const { language } = useLanguage();
	const translations = {
		en: {
			page_subtites: "Empowering Farmers, Growing Careers – Join Us Today!",
			we_are_hiring: "We are hiring!",
			apply_now: "Apply Now",
			view_instructions: "View Instructions",
			hide_instructions: "Hide Instructions",
			how_to_apply: "How to Apply:",
			instructions_title: "Follow these steps to apply for the job:",
			step1: "Ensure your resume is up-to-date and ready to submit.",
			step2:
				"Prepare a cover letter that outlines your passion for the job and relevant experience.",
			step3: "Click 'Apply Now' to submit your resume and cover letter.",
			step4: "Provide the required details like name, email, and resume link.",
			benefits: "Benefits",
			button_text: "More Details",
			responsibilities: "Job Responsibilities",
			requirements: "Job Requirements",
			email_text:
				"If you're ready to join our team, submit your resume and cover letter to:",
			applyEmail: "hrkrishyaniagro@gmail.com",
			form_header: "Apply for Agricultural Advisor",
			note: "Krishyani Agro is an equal opportunity employer and welcomes applications from diverse candidates. ",
		},

		mr: {
			page_subtites:
				"शेतकऱ्यांना सशक्त करा, करिअर वाढवा – आजच आम्हाला सामील व्हा!",
			we_are_hiring: "आम्हाला सामील व्हा!",
			apply_now: "आता अर्ज करा",
			view_instructions: "सूचना पहा",
			hide_instructions: "सूचना लपवा",
			how_to_apply: "कसे अर्ज करावे:",
			instructions_title: "नोकरीसाठी अर्ज करण्यासाठी या चरणांचे पालन करा:",
			step1:
				"आपले रिज्युमे अपडेट केले आहे आणि सबमिट करण्यासाठी तयार आहे याची खात्री करा.",
			step2:
				"एक कव्हर लेटर तयार करा जे नोकरीसाठी आपली आवड आणि संबंधित अनुभव दर्शविते.",
			step3:
				"'आता अर्ज करा' वर क्लिक करा आणि आपले रिज्युमे आणि कव्हर लेटर सबमिट करा.",
			step4: "आवश्यक तपशील जसे की नाव, ईमेल, आणि रिज्युमे लिंक प्रदान करा.",
			benefits: "फायदे",
			button_text: "अधिक तपशील",
			responsibilities: "कार्य जबाबदारी",
			requirements: "पात्रता आणि आवश्यकता",
			email_text:
				"जर तुम्ही आमच्या टीममध्ये सामील होण्यास तयार असाल, तर तुमचे Resume आणि Cover Letter येथे सबमिट करा:",
			applyEmail: "hrkrishyaniagro@gmail.com",
			form_header: "कृषी सल्लागार पदासाठी अर्ज करा",
			note: "कृष्याणी अॅग्रो एक समान संधी प्रदान करणारी संस्था आहे आणि विविध उमेदवारांच्या अर्जांचे स्वागत करते।",
		},

		hi: {
			page_subtites:
				"किसानों को सशक्त बनाएं, करियर बढ़ाएं – आज ही हमारे साथ जुड़ें!",
			we_are_hiring: "हम भर्ती कर रहे हैं!",
			apply_now: "अभी आवेदन करें",
			view_instructions: "निर्देश देखें",
			hide_instructions: "निर्देश छिपाएं",
			how_to_apply: "आवेदन कैसे करें:",
			instructions_title:
				"नौकरी के लिए आवेदन करने के लिए इन चरणों का पालन करें:",
			step1:
				"सुनिश्चित करें कि आपका रिज्यूमे अपडेट किया गया है और जमा करने के लिए तैयार है।",
			step2:
				"एक कवर लेटर तैयार करें जो नौकरी के प्रति आपका जुनून और प्रासंगिक अनुभव दर्शाए।",
			step3:
				"'अभी आवेदन करें' पर क्लिक करें और अपना रिज्यूमे और कवर लेटर जमा करें।",
			step4: "आवश्यक विवरण जैसे नाम, ईमेल, और रिज्यूमे लिंक प्रदान करें।",
			benefits: "फायदे",
			button_text: "अधिक सूचना",
			responsibilities: "कार्य जिम्मेदारी",
			requirements: "योग्यता और आवश्यकताएँ ",
			email_text:
				"यदि आप हमारी टीम में शामिल होने के लिए तैयार हैं, तो अपना Resume और Cover Letter यहाँ सबमिट करें:",
			applyEmail: "hrkrishyaniagro@gmail.com",
			form_header: "कृषि सलाहकार के लिए आवेदन करें ",
			note: "कृष्याणी एग्रो एक समान अवसर नियोक्ता है और विविध उम्मीदवारों के आवेदनों का स्वागत करता है।",
		},
	};

	const jobPositions = [
		{
			title: {
				en: "Agriculture Advisor",
				mr: "कृषी सल्लागार",
				hi: "कृषि सलाहकार",
			},
			subtitle: {
				en: "If you have a passion for the Agriculture industry and are looking for a challenging and rewarding role, we want to hear from you!",
				mr: "तुम्हाला कृषी क्षेत्राची आवड असेल आणि तुम्ही आव्हानात्मक व समाधानकारक भूमिकेसाठी शोधत असाल, तर आम्हाला तुमच्याबद्दल ऐकायला आवडेल!",
				hi: "यदि आपको कृषि उद्योग के प्रति जुनून है और आप एक चुनौतीपूर्ण और पुरस्कृत भूमिका की तलाश में हैं, तो हम आपसे सुनना चाहेंगे!",
			},
			responsibilities: {
				en: [
					"Answer farmer queries over the call.",
					"Follow up with farmers to ensure satisfaction.",
					"Provide details of the product's unique selling proposition (USP).",
					"Guide farmers in selecting the right product and drive sales.",
				],
				mr: [
					"शेतकऱ्यांच्या प्रश्नांची फोनवर उत्तरे द्या.",
					"शेतकऱ्यांच्या समाधानासाठी फॉलोअप घ्या.",
					"उत्पादनाच्या वैशिष्ट्यांविषयी माहिती द्या.",
					"शेतकऱ्यांना योग्य उत्पादन निवडण्यास मार्गदर्शन करा आणि विक्री वाढवा.",
				],
				hi: [
					"किसानों की कॉल पर उनकी शंकाओं का समाधान करें।",
					"किसानों की संतुष्टि सुनिश्चित करने के लिए फॉलो-अप करें।",
					"उत्पाद की विशेषताओं (USP) की जानकारी प्रदान करें।",
					"किसानों को सही उत्पाद चुनने में मार्गदर्शन करें और बिक्री बढ़ाएं।",
				],
			},
			requirements: {
				en: [
					"Minimum Education: B.Sc. in Agriculture",
					"Preferred: Masters in Agriculture Science",
					"Passion for the agriculture industry.",
					"Excellent communication and customer service skills.",
				],
				mr: [
					"किमान शिक्षण: बी.एस्सी. अॅग्रीकल्चर",
					"प्राधान्य: कृषी विज्ञानात पदव्युत्तर शिक्षण",
					"कृषी क्षेत्राची आवड असणे आवश्यक.",
					"उत्तम संवाद कौशल्ये आणि ग्राहक सेवा कौशल्ये.",
				],
				hi: [
					"न्यूनतम शिक्षा: बी.एससी. कृषि",
					"वरीयता: कृषि विज्ञान में मास्टर्स",
					"कृषि उद्योग के प्रति जुनून।",
					"उत्कृष्ट संचार और ग्राहक सेवा कौशल।",
				],
			},
			benefits: {
				en: [
					"Competitive salary and benefits package",
					"Opportunity to work with a dynamic, growing company",
					"Collaborative, supportive team environment",
					"Professional development and growth opportunities",
				],
				mr: [
					"स्पर्धात्मक वेतन आणि फायदे पॅकेज",
					"गतीशील आणि वाढणाऱ्या कंपनीसोबत काम करण्याची संधी",
					"सहकार्यशील आणि मदतशील कार्यसंस्कृती",
					"व्यावसायिक वाढीची आणि विकासाची संधी",
				],
				hi: [
					"प्रतिस्पर्धी वेतन और लाभ पैकेज",
					"एक गतिशील और बढ़ती कंपनी के साथ काम करने का अवसर",
					"सहयोगी और सहायक टीम वातावरण",
					"पेशेवर विकास और प्रगति के अवसर",
				],
			},
		},
	];

	const [open, setOpen] = useState(false);
	const [applyOpen, setApplyOpen] = useState(false);
	const [currentJob, setCurrentJob] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		resume: "",
	});

	const instructions = {
		title: {
			en: "How to Apply:",
			hi: "आवेदन कैसे करें:",
			mr: "अर्ज कसा करायचा:",
		},
		stepsTitle: {
			en: "Follow these steps to apply for the job:",
			hi: "नौकरी के लिए आवेदन करने के लिए इन चरणों का पालन करें:",
			mr: "नोकरीसाठी अर्ज करण्यासाठी हे चरण अनुसरा:",
		},
		steps: {
			en: [
				"Ensure your resume is up-to-date and ready to submit.",
				"Prepare a cover letter that outlines your passion for the job and relevant experience.",
				"Click 'Apply Now' to submit your resume and cover letter.",
				"Provide the required details like name, email, and resume link.",
			],
			hi: [
				"सुनिश्चित करें कि आपका रिज़्यूमे अपडेटेड और सबमिट करने के लिए तैयार है।",
				"एक कवर लेटर तैयार करें जो नौकरी के प्रति आपका जुनून और प्रासंगिक अनुभव दर्शाए।",
				"'अभी आवेदन करें' पर क्लिक करके अपना रिज़्यूमे और कवर लेटर सबमिट करें।",
				"आवश्यक विवरण जैसे नाम, ईमेल और रिज़्यूमे लिंक प्रदान करें।",
			],
			mr: [
				"तुमचा रिझ्युमे अपडेट आहे आणि सबमिट करण्यासाठी तयार आहे याची खात्री करा.",
				"तुमच्या नोकरीबद्दलच्या आवडी आणि संबंधित अनुभवाचा उल्लेख करणारे कव्हर लेटर तयार करा.",
				"'आत्ताच अर्ज करा' वर क्लिक करून तुमचा रिझ्युमे आणि कव्हर लेटर सबमिट करा.",
				"आवश्यक माहिती जसे की नाव, ईमेल आणि रिझ्युमे लिंक प्रदान करा.",
			],
		},
	};

	const handleOpen = (job) => {
		setCurrentJob(job);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setCurrentJob(null);
	};

	const handleApplyOpen = () => {
		setOpen(false);
		setApplyOpen(true);
	};

	const handleApplyClose = () => {
		setApplyOpen(false);
		setFormData({ name: "", email: "", resume: "" });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const emailData = {
			to_name:"Krishyani Agro",
			to_email: "hrkrishyaniagro@gmail.com",
			from_name: formData.name,
			from_email: formData.email,
			message: `Resume Link: ${formData.resume}`,
			candidate_message:formData.message || "",
		};

		emailjs
			.send(
				"service_m36yneo",
				"template_7ceeqga",
				emailData,
				"sGwJxPPl02iTlp4XO"
			)
			.then(
				(response) => {
					console.log("Email sent successfully:", response);
					handleApplyClose();
					alert("Application submitted successfully!");
				},
				(error) => {
					console.log("Error sending email:", error);
					alert("There was an error. Please try again.");
				}
			);
	};

	return (
		<div className=' relative top-12  p-16 '>
			<div className={styles.chip_div}>
				<div className={styles.weAreHiring}>
					<NotificationsIcon />
					{translations[language].we_are_hiring}
				</div>
				<div className={styles.page_subtitle}>
					{translations[language].page_subtites}
				</div>
			</div>

			<div className={styles.jobCardsGrid}>
				{jobPositions.map((job, index) => (
					<div className={styles.jobCard} key={index}>
						<div className={styles.jobCardHeader}>
							<h2 className={styles.job_title}>{job.title[language]}</h2>
							<p className={styles.job_subtitle}>{job.subtitle[language]}</p>
						</div>

						<div className={styles.jobBenefits}>
							<h3>{translations[language].benefits}:</h3>
							<ul>
								{job.benefits[language].slice(0, 7).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>

						<button
							className={styles.moreDetailsButton}
							onClick={() => handleOpen(job)}>
							{translations[language].button_text}
						</button>
					</div>
				))}
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='job-details-modal'
				aria-describedby='job-description-modal'>
				<div className={styles.modalBackdrop}>
					<div className={styles.modalContent}>
						<div style={{ display: "flex", justifyContent: "end" }}>
							<button className={styles.closeButton} onClick={handleClose}>
								✖
							</button>
						</div>
						<h1 style={{ fontSize: "20px", fontWeight: "700" }}>
							{currentJob?.title[language]}
						</h1>
						<br></br>

						<div className={styles.jobResponsibilities}>
							<h3 style={{ fontSize: "16px", fontWeight: "600" }}>
								{translations[language].responsibilities}:
							</h3>
							<ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
								{currentJob?.responsibilities[language].map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
						<br></br>
						<div className={styles.jobRequirements}>
							<h3 style={{ fontSize: "16px", fontWeight: "700" }}>
								{translations[language].requirements}:
							</h3>
							<ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
								{currentJob?.requirements[language].map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
						<br></br>

						<div className={styles.howToApply}>
							<p>
								{translations[language].email_text}{" "}
								<span style={{ fontWeight: "700" }}>
									{translations[language].applyEmail}
								</span>
							</p>
							<Button className={styles.applyButton} onClick={handleApplyOpen}>
								Apply Now
							</Button>
						</div>
					</div>
				</div>
			</Modal>

			<Modal
				open={applyOpen}
				onClose={handleApplyClose}
				aria-labelledby='apply-form-modal'
				aria-describedby='apply-form-description'>
				<div className={styles.modalBackdrop}>
					<div className={styles.modalContent}>
						<div style={{ display: "flex", justifyContent: "end" }}>
							<button className={styles.closeButton} onClick={handleApplyClose}>
								✖
							</button>
						</div>
						<div
							style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
							<h2 style={{ fontWeight: "bold" }}>
								{translations[language].form_header}
							</h2>
							<div className={styles.instructions}>
								<p className={styles.stepsTitle}>
									{instructions.stepsTitle[language]}
								</p>
								<ul className={styles.steps}>
									{instructions.steps[language].map((step, index) => (
										<li key={index}>{step}</li>
									))}
								</ul>
							</div>
						</div>
						<form onSubmit={handleFormSubmit}>
							<TextField
								label='Name'
								variant='outlined'
								sx={{
									width: "100%",
									height: "40px",
									"& .MuiOutlinedInput-root": {
										"& fieldset": { borderColor: "gray" }, // Default border color
										"&:hover fieldset": { borderColor: "black" }, // Border color on hover
										"&.Mui-focused fieldset": { borderColor: "green" }, // Border color when focused
									},
									"& .MuiInputLabel-root": {
										color: "gray", // Default label color
									},
									"& .MuiInputLabel-root.Mui-focused": {
										color: "green",
										top: "2px", // Label color when focused
									},
								}}
								InputProps={{ sx: { height: "45px" } }}
								InputLabelProps={{ sx: { fontSize: "14px", top: "-5px" } }}
								fullWidth
								margin='normal'
								name='name'
								value={formData.name}
								onChange={handleInputChange}
								required
							/>
							<TextField
								label='Email'
								variant='outlined'
								fullWidth
								margin='normal'
								name='email'
								value={formData.email}
								onChange={handleInputChange}
								required
								sx={{
									width: "100%",
									height: "40px",
									"& .MuiOutlinedInput-root": {
										"& fieldset": { borderColor: "gray" }, // Default border color
										"&:hover fieldset": { borderColor: "black" }, // Border color on hover
										"&.Mui-focused fieldset": { borderColor: "green" }, // Border color when focused
									},
									"& .MuiInputLabel-root": {
										fontSize: "14px",
										color: "gray",
										// Default label color
									},
									"& .MuiInputLabel-root.Mui-focused": {
										color: "green",
										top: "2px", // Label color when focused
									},
								}}
								InputProps={{ sx: { height: "45px" } }}
								InputLabelProps={{ sx: { fontSize: "14px", top: "-5px" } }}
							/>
							<TextField
								label='Message'
								variant='outlined'
								fullWidth
								margin='normal'
								name='message'
								value={formData.message}
								onChange={handleInputChange}
								sx={{
									width: "100%",
									height: "40px",
									"& .MuiOutlinedInput-root": {
										"& fieldset": { borderColor: "gray" }, // Default border color
										"&:hover fieldset": { borderColor: "black" }, // Border color on hover
										"&.Mui-focused fieldset": { borderColor: "green" }, // Border color when focused
									},
									"& .MuiInputLabel-root": {
										color: "gray", // Default label color
									},
									"& .MuiInputLabel-root.Mui-focused": {
										color: "green",
										top: "2px", // Label color when focused
									},
								}}
								InputProps={{ sx: { height: "45px" } }}
								InputLabelProps={{ sx: { fontSize: "14px", top: "-5px" } }}
							/>
							<TextField
								label='Resume (Link)'
								variant='outlined'
								fullWidth
								margin='normal'
								name='resume'
								value={formData.resume}
								onChange={handleInputChange}
								required
								sx={{
									width: "100%",
									height: "40px",
									"& .MuiOutlinedInput-root": {
										"& fieldset": { borderColor: "gray" }, // Default border color
										"&:hover fieldset": { borderColor: "black" }, // Border color on hover
										"&.Mui-focused fieldset": { borderColor: "green" }, // Border color when focused
									},
									"& .MuiInputLabel-root": {
										color: "gray", // Default label color
									},
									"& .MuiInputLabel-root.Mui-focused": {
										color: "green",
										top: "2px", // Label color when focused
									},
								}}
								InputProps={{ sx: { height: "45px" } }}
								InputLabelProps={{ sx: { fontSize: "14px", top: "-5px" } }}
							/>

							<Button
								type='submit'
								className={styles.applyButton}
								fullWidth
								style={{ marginTop: "20px" }}>
								Submit Application
							</Button>
						</form>
					</div>
				</div>
			</Modal>
			<div className={styles.noteContainer}>
				{/* <InfoOutlinedIcon className={styles.noteIcon} /> */}
				<p className={styles.noteText}>
					<strong>Note:</strong> {translations[language].note}
				</p>
			</div>
		</div>
	);
}

export default Careers;
