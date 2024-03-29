import styled from "styled-components";

export const Button=styled.a`
    border-radius:50px;
    text-decoration: none;
    background:${({primary})=>(primary ? '#6c64ff' :'#010606')};
    white-space:nowrap;
    padding:${({big}) =>(big ? '14px 48px' : '12px 30px')};
    color:${({dark})=>(dark ? '#fff' :'#fff')};
    font-size:${({fontBig})=>(fontBig ?'20px' :'16px')};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        color:${({dark})=>(dark ? '#000' :'#000')};
        background:${({primary})=>(primary ? '#fff':'#6c64ff' )}; 
    };
`;