import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

export class AddPage extends Component<{ onFinish: any }> {
   state = {
      contact: {
         id: nanoid(),
         name: '',
         photo: '',
         email: '',
         phone: '',
         age: 0,
         gender: 'male',
         status: 'Friend',
      },
      isRedirect: false
   };

   handleOnFinish = () => {
      this.props.onFinish(this.state.contact);
      this.setState({...this.state, isRedirect: true});
   };

   render() {
      if (this.state.isRedirect) {
         return <Navigate to="/" />;
      }

      return (
         <div className="w-ful mt-8 transition">
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <label
                     className="block uppercase tracking-wide text-blue-200 text-xs font-bold mb-2"
                     htmlFor="grid-name"
                  >
                     Name
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-name"
                     type="text"
                     placeholder="Joane Doe"
                     onChange={(e) => this.setState({...this.state, contact: {...this.state.contact, name: e.target.value} })}
                  />
                  <p className="text-gray-600 text-xs italic">
                     Make it as long and as crazy as you'd like
                  </p>
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <label
                     className="block uppercase tracking-wide text-blue-200 text-xs font-bold mb-2"
                     htmlFor="grid-preview"
                  >
                     Preview
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-preview"
                     type="text"
                     placeholder="https://www.picture.com/joane-doe.png"
                     onChange={(e) => this.setState({...this.state, contact: {...this.state.contact, preivew: e.target.value} })}
                  />
                  <p className="text-gray-600 text-xs italic">
                     Make it as long and as crazy as you'd like
                  </p>
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <label
                     className="block uppercase tracking-wide text-blue-200 text-xs font-bold mb-2"
                     htmlFor="grid-email"
                  >
                     Email
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-email"
                     type="text"
                     placeholder="joanedoe@gmail.com"
                     onChange={(e) => this.setState({...this.state, contact: {...this.state.contact, email: e.target.value} })}
                  />
                  <p className="text-gray-600 text-xs italic">
                     Make it as long and as crazy as you'd like
                  </p>
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <label
                     className="block uppercase tracking-wide text-blue-200 text-xs font-bold mb-2"
                     htmlFor="grid-phone"
                  >
                     Phone
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-phone"
                     type="text"
                     placeholder="+ 123-456-78-90"
                     onChange={(e) => this.setState({...this.state, contact: {...this.state.contact, phone: e.target.value} })}
                  />
                  <p className="text-gray-600 text-xs italic">
                     Make it as long and as crazy as you'd like
                  </p>
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                     className="block uppercase tracking-wide text-blue-200 text-xs font-bold mb-2"
                     htmlFor="grid-gender"
                  >
                     Gender
                  </label>
                  <div className="relative">
                     <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-gender"
                        onChange={(e) => this.setState({...this.state, contact: {...this.state.contact, gender: e.target.value} })}
                     >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                           className="fill-current h-4 w-4"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                        >
                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                     className="block uppercase tracking-wide text-blue-200 text-xs font-bold mb-2"
                     htmlFor="grid-age"
                  >
                     Age
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-age"
                     type="number"
                     placeholder="21"
                     onChange={(e) => this.setState({...this.state, contact: {...this.state.contact, age: e.target.value} })}
                  />
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 mt-6">
               <div className="w-full px-3 flex items-center justify-end gap-4">
                  <button
                     className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                     onClick={() => this.setState({...this.state, isRedirect: true})}
                  >
                     Cancel
                  </button>
                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                     type="button"
                     onClick={this.handleOnFinish}
                  >
                     Create
                  </button>
               </div>
            </div>
         </div>
      );
   }
}