import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initialContacts, statusColors } from './mockData';
import { HomePage } from './pages/home';
import { AddPage } from './pages/add';
import { EditPage } from './pages/edit';

interface AppState {
   contacts: IContact[];
   currentContact?: IContact
}

class App extends Component {
   
   state: AppState = {
      contacts: initialContacts,
      currentContact: undefined
   };

   handleOnDelete = (id: string) => {
      const index = this.state.contacts.findIndex((m) => m.id === id);
      if (index !== -1) {
         this.setState({
            ...this.state,
            contacts: [
               ...this.state.contacts.slice(0, index),
               ...this.state.contacts.slice(index + 1),
            ],
         });
      }
   };

   handleOnEdit = (id: string) => {
      const contact = this.state.contacts.find((m) => m.id === id);
      if (contact) {
         this.setState({...this.state, currentContact: contact});
      }
   }

   handleOnFinish = (contact: IContact) => {
      const index = this.state.contacts.findIndex((m) => m.id === contact.id);

      if (index !== -1) {
         this.setState({
            ...this.state,
            contacts: [...this.state.contacts.slice(0, index), contact, ...this.state.contacts.slice(index + 1)]
         });
      }
      else {
         this.setState({
            ...this.state,
            contacts: [...this.state.contacts, contact],
         });
      }

      if (this.state.currentContact) {
         this.setState({
            ...this.state,
            currentContact: undefined
         });
      }
   };

   handleOnStatusChange = (id: string) => {
      const index = this.state.contacts.findIndex(m => m.id === id);

      if (index !== -1) {
         const contact = this.state.contacts[index];

         contact.status = ChangeStatus(contact.status);

         this.setState({
            ...this.state,
            contacts: [...this.state.contacts.slice(0, index), contact, ...this.state.contacts.slice(index + 1)]
         })
      }
   }

   render() {
      return (
         <div className="bg-gray-700">
            <div className="flex flex-col 2xl:w-1/3 xl:w-1/2 mx-auto min-h-screen">
               <Routes>
                  <Route
                     path=""
                     element={
                        <HomePage
                           contacts={this.state.contacts}
                           onEdit={this.handleOnEdit}
                           onStatusChange={this.handleOnStatusChange}
                        />
                     }
                  />
                  <Route
                     path="create"
                     element={<AddPage onFinish={this.handleOnFinish} />}
                  />
                  <Route
                     path="edit"
                     element={
                        <EditPage contact={this.state.currentContact} onFinish={this.handleOnFinish} onDelete={this.handleOnDelete} />
                     }
                  />
               </Routes>
            </div>
         </div>
      );
   }
}

export default App;

function ChangeStatus(status: Status) {
   const statusSet = statusColors.map(item => item.name);

   const index = statusSet.findIndex(m => m === status);

   if (index !== -1) {
      if (index + 1 < statusSet.length) {
         return statusSet[index + 1];
      }
      else {
         return statusSet[0];
      }
   }

   return status;
}