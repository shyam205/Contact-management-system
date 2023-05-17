import React, { useState } from 'react'
import Sidebar from '../components/sidebar';
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { editContact } from '../redux/actions/contact-details';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface contact {
    id:number,
    firstname:string,
    lastname:string,
    status:boolean
   }

function Edit() {
    const allcontact:[contact] = useSelector((state:any) => state.contactReducer.contacts)
    const {id } = useParams();
    const filtercontact:contact = allcontact.filter(item => item.id === Number(id))[0]
    const dispatch = useDispatch();
   const router = useNavigate()

     // edit handler
    const handleEdit = (e:any) => {
        e.preventDefault();
       dispatch(editContact(contactdetail))
       router('/');
        }

    const [contactdetail,setContactdetail] = useState({
        firstname : filtercontact.firstname,
        lastname : filtercontact.lastname,
        status : filtercontact.status,
        id : filtercontact.id
    })

    const handleChange = (e:any) => {
        let value = e.target.value;

        if(e.target.name === 'status'){
             value = Boolean(e.target.value)
        }
        setContactdetail({...contactdetail,[e.target.name]:value})
    }

  return (
    <div className='w-[100%] flex justify-center flex-col lg:flex-row'>
    <div className='left-section w-[300px] hidden lg:block'><Sidebar /></div>
        <div className='bg-indigo-100 flex justify-start p-3 lg:hidden z-50'>
            <Link to='/' className='text-indigo-700 cursor-pointer'>Contact</Link>
            <Link to='/chart-map' className='text-indigo-700 ml-5 cursor-pointer'>Chart and Map</Link>
        </div>
       <div className='right-section flex-grow-1 w-[100%] bg-indigo-50'>
       <div className='h-[95vh] lg:h-screen'>
                    <div className='fixed w-full h-screen top-0 flex justify-center'>
                      <form className='w-max absolute top-1/2 translate-x-0  lg:-translate-x-1/2 -translate-y-1/2 py-8 px-8 rounded-lg shadow-lg'>
                        <div>
                          <h2 className='py-4 text-2xl font-bold'>Create Contact form</h2>
                          <div>
                              <label>First Name:</label>
                              <input name="firstname" className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-4 py-2 ml-2 rounded-lg" placeholder='First Name' value={contactdetail.firstname} onChange={handleChange} />
                          </div>
                          <div className='mt-4'>
                              <label>Last Name:</label>
                              <input name="lastname" className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-4 py-2 ml-2 rounded-lg" placeholder='Last Name' value={contactdetail.lastname} onChange={handleChange} />
                          </div>
                          <div className='status flex flex-row mt-6 items-center'>
                               <div className='w-1/2'><p>Status</p></div>
                               <div className='w-1/2'>
                               <div className="flex items-center mr-4">
                                    <input id="inline-radio" name="status" type="radio" value={1} defaultChecked={contactdetail.status ? true : false} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" onChange={handleChange} />
                                    <label for-html="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                                </div>
                                <div className="flex items-center mr-4 mt-3">
                                    <input id="inline-2-radio" name="status" type="radio" value={0} defaultChecked={contactdetail.status ? false : true} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" onChange={handleChange} />
                                    <label for-html="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                                </div>
                               </div>
                          </div>
                          </div>
                          <div>
                          <button className="rounded-lg mt-5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-6" onClick={ (e) => handleEdit(e)}>Save Changes</button>
                          </div>
                      </form>
                      </div>
                  </div>
    </div>
    </div>
  )
}

export default Edit