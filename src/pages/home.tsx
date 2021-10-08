import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactItem } from '../components/contactItem';

export const HomePage = (props: { contacts: IContact[]; onEdit: any; onStatusChange: any; }) => {
   const navigate = useNavigate();

   const [search, setSearch] = useState('');

   const handleOnSearch = (event: any) => {
      setSearch(event.target.value);
   };

   const handleOnEdit = (id: string) => {
      props.onEdit(id);
      navigate('/edit');
   };

   const handleOnStatusChange = (id: string) => {
      props.onStatusChange(id);
   };

   return (
      <>
         <header>
            <input
               onChange={handleOnSearch}
               type="text"
               placeholder="search"
               className="appearance-none bg-purple-50 border-b-2 border-purple-400 w-full text-gray-700 py-3 px-4 outline-none"
            />
         </header>
         <main>
            <div className="text-purple-100 mt-4 ">
               {props.contacts
                  .filter((m) =>
                     m.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((contact, index) => (
                     <ContactItem
                        key={index}
                        contact={contact}
                        onEdit={handleOnEdit}
                        onStatusChange={handleOnStatusChange}
                     />
                  ))}
            </div>
            <Link to="/create">
               <div className="p-4 bg-purple-300 float-right rounded-full transition transform hover:scale-105 shadow">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="#ffffff"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                     />
                  </svg>
               </div>
            </Link>
         </main>
      </>
   );
};
