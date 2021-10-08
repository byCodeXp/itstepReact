/// <reference types="react-scripts" />

type Status = 'Work' | 'Friend' | 'Family';

interface IStatus {
   name: Status;
   color: string;
}

interface IContact {
   id: string;
   name: string;
   photo: string;
   email: string;
   phone: string;
   age: number;
   gender: 'male' | 'female';
   status: Status;
}
