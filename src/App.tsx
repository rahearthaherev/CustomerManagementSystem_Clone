import React from 'react';
import Customer from './components/customer';
import { CustomerInfo } from './interface/interfaces';
import { Table, TableBody, TableCell, TableHead } from '@mui/material';
import { styled } from '@mui/system';

const RootStyle = styled('div')({
  width: '100%',
  marginTop: '30px',
  overflow: 'auto'
})

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

  return <RootStyle>
    <Table sx={{ minWidth: '1080px' }}>
      <TableHead>
        <TableCell>아이디</TableCell>
        <TableCell>프로필사진</TableCell>
        <TableCell>이름</TableCell>
        <TableCell>생년월일</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>직업</TableCell>
      </TableHead>
      <TableBody>
        {customers.map((customer) => {
          return <Customer key={customer.id} {...customer}></Customer>
        })}
      </TableBody>
    </Table>
  </RootStyle>
}

export default App;
