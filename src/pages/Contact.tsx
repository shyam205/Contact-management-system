import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../redux/actions/contact-details';


interface contact {
 id:number,
 firstname:string,
 lastname:string
}
function Contact() {

  const [ nocontact,setNocontact] = useState(true);
  const [ contactform, setContactform] = useState(false)

  const contacts:[contact] = useSelector((state:any) => state.contactReducer.contacts)
  const dispatch = useDispatch()

  const handleDelete = (id:number) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className='w-[100%] flex justify-center flex-col lg:flex-row'>
        <div className='left-section w-[300px] hidden lg:block'><Sidebar /></div>
        <div className='bg-indigo-100 flex justify-start p-3 lg:hidden'>
            <Link to='/' className='text-indigo-700'>Contact</Link>
            <Link to='/chart-map' className='text-indigo-700 ml-5'>Chart and Map</Link>
        </div>
           <div className='right-section flex-grow-1 w-[100%] bg-indigo-50 h-screen'>

            {/* when there will be some contact data available */}
           {
                contacts.length ? 
                <>
                <div className='top_section mt-20'>
                        <button type="button" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded cursor-pointer" onClick={() =>setContactform(true)}>
                          <Link to='/create-contact' className='inline-block px-9 py-3'>Create a Contact</Link>
                        </button>
                        </div>
                <div className='flex justify-left flex-wrap w-[60%] mx-auto mt-20 gap-x-10 gap-y-10 sm:gap-y-0'>
                    {
                    contacts.map((contact,i) => (
                        <div key={i} className='shadow-lg rounded-lg p-5 w-full md:w-[45%]'>
                            <p className='font-bold'>{contact.firstname} {contact.lastname}</p>
                           <Link to={`/edit/${contact.id}`} className='block py-1 px-5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white my-3 rounded w-max mx-auto'>Edit</Link>
                           <button onClick={() => handleDelete(contact.id)} className='bg-red-600 text-white py-1 px-5 rounded'>Delete</button>
                        </div>
                    )
                    )
                  }
                </div>
                </>
                : (
                  <div className='create_contact_wrapper'>
                        <div className='top_section mt-20'>
                        <button type="button" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-9 py-3 rounded cursor-pointer" onClick={() =>setContactform(true)}>
                          <Link to='/create-contact'>Create a Contact</Link>
                        </button>
                        </div>
                        { nocontact && 
                        <div className='middle_section mt-20 flex justify-center'>
                           <div className='flex flex-row justify-center p-4 shadow-lg w-max'>
                               <div className='py-4 px-3'>
                               <svg
                                  viewBox="0 0 16 16"
                                  fill="indigo"
                                  height="35px"
                                  width="35px"
                                  className='cursor-pointer'
                                  onClick={() => setNocontact(false)}
                                >
                                  <path
                                    fill="blue"
                                    d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
                                  />
                                  <path
                                    fill="blue"
                                    d="M10.5 4L8 6.5 5.5 4 4 5.5 6.5 8 4 10.5 5.5 12 8 9.5l2.5 2.5 1.5-1.5L9.5 8 12 5.5z"
                                  />
                                </svg>
                               </div>
                               <div className='py-4 px-3 text-blue-600'>
                                   <p>No Contact found Please add contact from create contact button</p>
                               </div>
                           </div>
                        </div>
                      }
                  </div>
                )
              }
           </div>
    </div>
  )
}

export default Contact