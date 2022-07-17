import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/register/", data),
  login: (data) => axios.post("/login/", data),
  getProfile: () => axios.get("/me/"),
  getAppartments: () => axios.get("/user/apartments"),
  getRecomendation:() => axios.get("/user/apartments/recommendations"),
  getSortRecomendation:(residential,page,limit)=> axios.get("/apartments/",{
    params: {
      residential_complex__eq: residential,
      page: page,
      limit:limit,
    }
  }),
  getIdJK:(id) => axios.get(`/residentialComplexes/${id}/`),
  getIndications:(address,number) => axios.get(`/user/apartments/meters/get/${address}/${number}`),
  formBuy:(data) => axios.post("/user/apartments/requestForm", data),
  getResidential:() => axios.get("/residentialComplexes"),
  getPartners:(id) => axios.get(`/residentialComplexes/${id}/partners/`),
  getDate: () => axios.get("/requests"),
  updateToken: (data) => axios.post("/token/refresh/", data),

};

export default endpoints;
