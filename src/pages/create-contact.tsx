import React,{useState} from 'react'
import Sidebar from '../components/sidebar';
import { useDispatch } from 'react-redux';
import { saveContact } from '../redux/actions/contact-details';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Contact {
    id:number,
    firstname:string,
    lastname:string,
    status:boolean
}
const Createcontact : React.FC = () => {
    //const id = uuidv4();
   // const idnum = Number(id);
    //console.log(typeof idnum)
    //console.log("id ",id)
    const [createdetail, setCreateetail] = useState<Contact>({
        firstname: '',
        lastname: '',
        status:false,
        //id:idnum
         id:Number(Math.floor((Math.random() * 1000) + 1)+''+Math.floor((Math.random() * 5000)+1)+''+Math.floor((Math.random() * 300)+1))
      });
  
    const router = useNavigate()
    const dispatch = useDispatch();
  
    const handleChange = (e: any) => {
        let value = e.target.value;

        if(e.target.name === 'status'){
             value = Boolean(Number(e.target.value))
        }
      setCreateetail({
        ...createdetail,
        [e.target.name]: value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // setContactform(false)
      console.log("createdetail ",createdetail)
      dispatch(saveContact(createdetail))
      router('/');
    };
  return (
    <div className='w-[100%] flex justify-center flex-col lg:flex-row'>
    <div className='left-section w-[300px] hidden lg:block'><Sidebar /></div>
        <div className='bg-indigo-100 flex justify-start p-3 lg:hidden z-50'>
            <Link to='/' className='text-indigo-700'>Contact</Link>
            <Link to='/chart-map' className='text-indigo-700 ml-5'>Chart and Map</Link>
        </div>
       <div className='right-section flex-grow-1 w-[100%] bg-indigo-50'>
 
                  <div className='h-[95vh] lg:h-screen'>
                    <div className='fixed w-full h-screen top-0 flex justify-center'>
                      <form className='w-max absolute top-1/2 translate-x-0  lg:-translate-x-1/2 -translate-y-1/2 py-8 px-8 rounded-lg shadow-lg'>
                        <div>
                          <h2 className='py-4 text-2xl font-bold'>Create Contact form</h2>
                          <div>
                              <label>First Name:</label>
                              <input name="firstname" value={createdetail.firstname} className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-4 py-2 ml-2 rounded-lg" placeholder='First Name' onChange={handleChange} />
                          </div>
                          <div className='mt-4'>
                              <label>Last Name:</label>
                              <input name="lastname" value={createdetail.lastname} className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-4 py-2 ml-2 rounded-lg" placeholder='Last Name' onChange={handleChange} />
                          </div>
                          <div className='status flex flex-row mt-6 items-center'>
                               <div className='w-1/2'><p>Status</p></div>
                               <div className='w-1/2'>
                               <div className="flex items-center mr-4">
                                    <input id="inline-radio" type="radio" name="status" value={1} defaultChecked={createdetail.status ? true : false} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" onChange={handleChange} />
                                    <label for-html="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                                </div>
                                <div className="flex items-center mr-4 mt-3">
                                    <input id="inline-2-radio" type="radio" name="status" value={0} defaultChecked={createdetail.status ? true : false} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" onChange={handleChange} />
                                    <label for-html="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                                </div>
                               </div>
                          </div>
                          </div>
                          <div>
                          <button className="rounded-lg mt-5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-6" onClick={ (e:any) => handleSubmit(e)}>Save Changes</button>
                          </div>
                      </form>
                      </div>
                  </div>
       </div>
</div>
  )
}

export default Createcontact