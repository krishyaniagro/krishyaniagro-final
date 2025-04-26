

"use client";
import { useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
} from "@mui/material";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";

import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { useLanguage } from "@/app/languagecontext";

const ContactUs = () => {
	const {language}=useLanguage();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const translations={
		en:{
			contact_title:"Contact Us",
			contact_subheader:"Keep in touch with our team",
			sales_team_contact:"Contact our sales team",
			hr_team_contact:"Contact our HR team",
			call_us:"Call us",
			visit_us:"Visit us"
		},
		mr:{
			contact_title:"आमच्याशी संपर्क साधा",
			contact_subheader:"आमच्या टीमसोबत संपर्कात रहा",
			sales_team_contact:"आमच्या विक्री टीमशी संपर्क साधा",
			hr_team_contact:"आमच्या HR टीमशी संपर्क साधा",
			call_us:"आम्हाला कॉल करा",
			visit_us:"आम्हाला भेट द्या"
		},
		hi:{
			contact_title:"संपर्क करें",
			contact_subheader:"हमारी टीम के साथ संपर्क में रहें",
			sales_team_contact:"हमारी बिक्री टीम से संपर्क करें",
			hr_team_contact:"हमारी HR टीम से संपर्क करें",
			call_us:"हमें कॉल करें",
			visit_us:"हमें मिलने आइए"
		}
	}

	const [openModal, setOpenModal] = useState(false); // Modal state

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_lyby83a", // Replace with your EmailJS Service ID
				"template_tgc7qup", // Replace with your EmailJS Template ID
				form,
				"ZZnI3YXA7EcS3HQZj" // Replace with your EmailJS Public Key
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert("Message sent successfully!");
					setForm({ name: "", email: "", message: "" }); // Reset form
					setOpenModal(false); // Close modal after submission
				},
				(error) => {
					console.error("FAILED...", error);
					alert("Failed to send message.");
				}
			);
	};

	return (
		<div className={`${styles.contact_section} relative top-12 p-16 pt-0`}>
			<div className={styles.contact_header_flex}>
			<div className={styles.contact_heading}> {translations[language].contact_title}</div>
			<div className={styles.contact_subheader}>{translations[language].contact_subheader}</div>
</div>
			<div className='w-full h-96 mb-8'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9114784765434!2d73.9780442!3d18.5780292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c344bc0e8c15%3A0x4d1df1b18e440a6e!2sKrishyani%20Agro!5e0!3m2!1sen!2sin!4v1740847264679!5m2!1sen!2sin'
					className='w-full h-full'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'></iframe>
			</div>

			{/* Cards Section */}
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
				<div className={`${styles.card_flex} p-6 bg-[#e9f2e9] shadow-lg rounded-lg text-center `}>
						<h3 className='text-xl font-semibold text-[#304330]'>{translations[language].sales_team_contact}</h3>
	
	{/* Open Gmail with the email pre-filled */}
	<a 
		href="https://mail.google.com/mail/?view=cm&to=krishyaniagro24@gmail.com" 
		target="_blank" 
		rel="noopener noreferrer"
	>
		<button className={styles.button1}>krishyaniagro24@gmail.com</button>
	</a>
				</div>
				<div className={`${styles.card_flex} p-6 bg-[#e9f2e9] shadow-lg rounded-lg text-center`}>
						<h3 className='text-xl font-semibold text-[#304330]'>{translations[language].hr_team_contact}</h3>
	
	{/* Open Gmail with the email pre-filled */}
	<a 
		href="https://mail.google.com/mail/?view=cm&to=hrkrishyaiagro@gmail.com" 
		target="_blank" 
		rel="noopener noreferrer"
	>
		<button className={styles.button1}>hrkrishyaniagro@gmail.com</button>
	</a>
				</div>
			<div className={`${styles.card_flex} p-6 bg-[#e9f2e9] shadow-lg rounded-lg text-center`}>
	<h3 className='text-xl font-semibold text-[#304330]'>{translations[language].call_us}</h3>
	<a
		href='https://wa.me/9359213421' // WhatsApp link with phone number
		target='_blank'
		rel='noopener noreferrer'>
		<button className={styles.button1}>9359213421</button>
	</a>
</div>
				<div className={`${styles.card_flex} p-6 bg-[#e9f2e9] shadow-lg rounded-lg text-center`}>
					<h3 className='text-xl font-semibold text-[#304330]'>{translations[language].visit_us}</h3>
					<a
						href='https://maps.app.goo.gl/ShXPb9fDyxGSfmL36'
						target='_blank'
						rel='noopener noreferrer'>
						<button className={styles.button1}>Visit on Google Maps</button>
					</a>
				</div>
			

			</div>
	 <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Connect with us</h3>
        <div className="flex justify-center gap-4 text-white">
          <a href="https://www.facebook.com/profile.php?id=61558561626399" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/krishyani_agro/profilecard/?igsh=ZzVpaW0wa3I4ODZ3" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full">
            <FaInstagram />
          </a>
          <a href="https://x.com/krishyani48444" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/krishyani-agro-397a81310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full">
            <FaLinkedin />
          </a>
		  <a href="https://wa.me/9359213421" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 p-3 rounded-full">
		
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com/@krishyaniagro?feature=shared" className="bg-red-600 hover:bg-red-700 p-3 rounded-full">
            <FaYoutube />
          </a>
        </div>
      </div>
			{/* Contact Form Modal */}
			<Dialog open={openModal} onClose={() => setOpenModal(false)}>
				<DialogTitle>Contact Sales Team</DialogTitle>
				<DialogContent>
					<form onSubmit={handleSubmit}>
						<TextField
							fullWidth
							label='Your Name'
							name='name'
							variant='outlined'
							margin='dense'
							required
							value={form.name}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							label='Your Email'
							name='email'
							type='email'
							variant='outlined'
							margin='dense'
							required
							value={form.email}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							label='Your Message'
							name='message'
							variant='outlined'
							margin='dense'
							required
							multiline
							rows={4}
							value={form.message}
							onChange={handleChange}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenModal(false)} color='secondary'>
						Cancel
					</Button>
					<Button onClick={handleSubmit} type='submit' color='primary'>
						Send
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ContactUs;
