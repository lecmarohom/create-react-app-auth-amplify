// let headers = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// };

export const GetEndPoint = () => {
  return 'http://localhost:3000';
  // if (window.location.href.includes('localhost:3000')) {
  //   return 'http://localhost:5000';
  // } else {
  //   return 'http://192.168.1.186:5000';
  // }
};

export const GetURL = (url) => {
  console.log('hahjakaka')
    return GetEndPoint() + url;
    
};

// export const GetURL = (url) => {

//   if (process.env.NODE_ENV === 'development') {
//     return GetEndPoint() + url;
//   } else {
//     return GetEndPoint() + url;
//   }
// };
