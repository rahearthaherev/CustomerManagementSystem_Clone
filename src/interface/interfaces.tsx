interface CustomerInfo extends CustomerProfileInfo, CustomerDetailInfo {
}

interface CustomerProfileInfo {
    id: string;
    image: string;
    name: string;
}

interface CustomerDetailInfo {
    birthday: number;
    sex: string;
    job: string;
}

export type { CustomerInfo, CustomerProfileInfo, CustomerDetailInfo };