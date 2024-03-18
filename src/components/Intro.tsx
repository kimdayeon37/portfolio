// // Import necessary modules from Next.js and GSAP
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const YourComponent = () => {
//   // Create a ref for the content and link elements
//   const contentRef = useRef(null);
//   const linkRef = useRef(null);
//   const linkIconRef = useRef(null);

//   useEffect(() => {
//     // Set up GSAP animation on component mount
//     gsap.registerPlugin("quickTo", "utils", "toArray");
//     gsap.quickTo = gsap.quickSetter;
//     gsap.utils.toArray = (selector, scope) => [].slice.call((scope || document).querySelectorAll(selector));

//     // Your GSAP animations and interactions go here
//     // ...

//     return () => {
//       // Clean up GSAP animations on component unmount
//       // ...
//     };
//   }, []);

//   return (
//     <div className="bg position-relative pb-5">
//       <div className="content" ref={contentRef}>
//         <div className="container">
//           {/* Your HTML content goes here */}
//           {/* ... */}
//         </div>
//       </div>
//       <div className="hidden-content">
//         <div className="container">
//           {/* Your hidden content goes here */}
//           {/* ... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;
