import Head from 'next/head';
import { NavbarContact } from '../../components/Navbarcontact';
import { useState } from 'react'

function Contact() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [messageContent, setMessageContent] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            firstName,
            lastName,
            emailAddress,
            messageContent}

    alert('Your message has been sent! Thank you :)')

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setFirstName('')
          setLastName('')
          setEmailAddress('')
          setMessageContent('')
        }
    })}


    return (
    <>
    <style global jsx>{`
            body {
              height: 100%;
              background-color: #161B22;
            }
    `}</style>
    <Head>
        <title>Anthony Bartczak Portfolio</title>
    </Head>
    <NavbarContact/>
            <div className="relative mt-12 mb-8">
            <div className="mx-4 xl:mx-80 absolute filter -inset-0.5 bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <form className="relative bg-gray-800 rounded-2xl shadow-2xl md:col-span-8 mt-5 pt-8 pb-1 px-8 mx-4 xl:mx-80">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input onChange={(e)=>{setFirstName(e.target.value)}} className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="John" aria-label="Full name"/>
                    <p className="text-red-500 text-xs italic mb-5"></p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input onChange={(e)=>{setLastName(e.target.value)}} className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="Doe" aria-label="Full name"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="my-10 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email-address">
                        Email Address
                    </label>
                    <input onChange={(e)=>{setEmailAddress(e.target.value)}} className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="email" placeholder="example@exp.com" aria-label="Full name"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="my-10 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message-content">
                    Your Message
                </label>
                <textarea onChange={(e)=>{setMessageContent(e.target.value)}} rows="10" className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none" type="email" placeholder="Your message goes here." aria-label="Full name">
                </textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center"></div>
                <button onClick={(e)=>{handleSubmit(e)}} className="my-2 shadow bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                    Send Message
                </button>
            </div>
        </div>
    </form>
    </div>
    </>
)}

export default Contact