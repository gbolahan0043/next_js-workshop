

//Using css module

import styles from "./example.module.css"

const ExamplePage = () => {

    return (
        <div className={styles.myHeader}>
            <div className={styles.hand}> Number 1</div>
            <div> Number 2</div>
            <div> Number 3</div>
        </div>
    )
}



// Using Global CSS

// import "../globals.css"

// const ExamplePage = () => {

//     return (
//         <div className="one">
//             <div> Number 1</div>
//             <div> Number 2</div>
//             <div> Number 3</div>
//         </div>
//     )
// }




//css in js
// const ExamplePage = () => {

//     const abc = {
//         display: 'flex',
//         padding: '60px',
//         backgroundColor: 'yellow'
//     }

//     return (
//         <div style={abc}>
//             <div> Number 1</div>
//             <div> Number 2</div>
//             <div> Number 3</div>
//         </div>
//     )
// }

export default ExamplePage;