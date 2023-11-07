import React from 'react';
import Customer from './components/customer';
import { CustomerInfo } from './interface/interfaces';


function App() {
  const customers: CustomerInfo[] = [{
    id: "testID1",
    image: "https://source.unsplash.com/random/64x64/?face",
    name: "정대균",
    birthday: 950305,
    sex: "남성",
    job: "프론트엔드 개발자"
  },
  {
    id: "testID2",
    image: "https://source.unsplash.com/random/64x64/?face",
    name: "정다은",
    birthday: 970515,
    sex: "여성",
    job: "캐드 설계자"
  },
  {
    id: "testID3",
    image: "https://source.unsplash.com/random/64x64/?face",
    name: "정민우",
    birthday: 990525,
    sex: "남성",
    job: "농기계 엔지니어"
  }];

  return <>
    {customers.map((customer) => {
      return <Customer key={customer.id} {...customer}></Customer>
    })}
  </>
}

export default App;
