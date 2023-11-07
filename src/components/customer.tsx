import React from 'react';
import { CustomerInfo, CustomerProfileInfo, CustomerDetailInfo } from '../interface/interfaces';

function Customer(props: CustomerInfo) {
    return <div>
        <CustomerProfile id={props.id} name={props.name} image={props.image}></CustomerProfile>
        <CustomerDetail birthday={props.birthday} sex={props.sex} job={props.job} ></CustomerDetail>
    </div>
}

function CustomerProfile(props: CustomerProfileInfo) {
    return <div>
        <img src={props.image} alt="profile" />
        <h2>{props.name}({props.id})</h2>
    </div>
}

function CustomerDetail(props: CustomerDetailInfo) {
    return <div>
        <p>{props.birthday}</p>
        <p>{props.sex}</p>
        <p>{props.job}</p>
    </div>
}

export default Customer;