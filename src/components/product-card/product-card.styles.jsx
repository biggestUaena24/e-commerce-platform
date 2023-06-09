import styled from "styled-components";

export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
height: 350px;

img {
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
}

button {
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
}

&:hover {
  button {
    opacity: 0.85;
    display: flex;
  }

  .product-card-footer {
         opacity: 0.9;
       }

       img {
         opacity: 0.8;
       }

`;

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding: 5px 10px 0 10px;
`;

// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   height: 350px;

//   img {
//     width: 100%;
//     height: 95%;
//     object-fit: cover;
//     margin-bottom: 5px;
//   }

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

//   &:hover {
//     button {
//       opacity: 0.85;
//       display: flex;
//     }

//     .product-card-footer {
//       opacity: 0.9;
//     }

//     img {
//       opacity: 0.8;
//     }
//   }

//   .footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 15px;
//     padding: 5px 10px 0 10px;
//   }
// }
