import { Component } from 'react';
import { statusColors } from '../mockData';

const statusColor = (status: string) => {
   const color = statusColors.find((m) => m.name === status)?.color;
   if (color) {
      return color;
   }
   return 'border-none';
};

export class ContactItem extends Component<{
   contact: IContact;
   onEdit: any;
   onStatusChange: any;
}> {
   render() {
      const { status, photo, name, email, phone, id } = this.props.contact;

      return (
         <div className="flex relative items-center mb-4">
            <div
               onClick={() => this.props.onStatusChange(id)}
               className={`w-full transition rounded cursor-pointer p-6 pb-0  bg-purple-500 transform hover:scale-105 border-b-4 ${statusColor(
                  status
               )}`}
            >
               <div className="flex items-center">
                  <img
                     className="rounded-full w-16 h-16 object-cover shadow"
                     src={photo}
                     alt={name}
                  />
                  <span className="ml-4 text-lg bg-purple-600 rounded">
                     {name}
                  </span>
                  <span className="ml-auto">
                     <div className="flex justify-between w-64 items-baseline">
                        <span className="text-sm">Email:</span>{' '}
                        <span>{email}</span>
                     </div>
                     <div className="flex justify-between w-64 items-baseline">
                        <span className="text-sm">Phone:</span>{' '}
                        <span>{phone}</span>
                     </div>
                  </span>
               </div>
               <div className="ml-20 text-sm">{status.toUpperCase()}</div>
            </div>
            <div
               onClick={() => this.props.onEdit(id)}
               className="cursor-pointer transition opacity-0 hover:opacity-100 absolute -right-24 bg-gray-600 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
               </svg>
            </div>
         </div>
      );
   }
}
