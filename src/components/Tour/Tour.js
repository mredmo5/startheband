import React, { Component } from 'react';
import styles from './Tour.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary'

const TourDate = {
Tour1: [
    {id: 'fdmfs'},
    {date: "Aug 19 2020"},
    {venue: "Mat/'s house "},
    {cityState: " Raleigh NC"},
    {description: "Come enjoy a beer in the yard and request your favorite songs!"}
],
Tour2: [
    {id: 'fdmfmjnuijs'},
    {date: "Aug 19 2021"},
    {venue: "Mat/'s house"},
    {cityState: "Raleigh NC"},
    {description: "Come enjoy a beer in the yard and request your favorite songs!"}
],
Tour3: [
    {id: 'fdmfgfs'},
    {date: "Aug 19 20202"},
    {venue: "Mat/'s house "},
    {cityState: " Raleigh NC"},
    {description: "Come enjoy a beer in the yard and request your favorite songs!"}
]

}

const TourOne = {
    date: "July 1 2020",
    desc: "Come enjoy a beer in the yard and request your favorite songs!",
    venue: "Mat/'s house ",
    cityState: " Raleigh NC"
}
const TourTwo = {
    date: "July 1 2021",
    desc: "Come enjoy a beer in the yard and request your favorite songs!",
    venue: "Mat/'s house ",
    cityState: " Raleigh NC"
}
const TourThree = {
    date: "July 1 2022",
    desc: "Come enjoy a beer in the yard and request your favorite songs!",
    venue: "Mat/'s house ",
    cityState: " Raleigh NC"
}


class Tour extends Component {
    render(){
        console.log({TourDate});
        return (
            <Aux>
              <div> 
                <h1 className='text-center'>
                  Tour
                </h1>
              </div>
                <div className={styles.Tour}>
                  <div className={styles.TourItems}>
                    <p className={styles.TourItem}>{TourOne.date}</p>
                    <p className={styles.TourItem}>{TourOne.venue}{TourOne.cityState}</p>
                    <p className={styles.TourItem}>{TourOne.desc}</p>
                  </div>
                  <div className={styles.TourItems}>
                    <p className={styles.TourItem}>{TourTwo.date}</p>
                    <p className={styles.TourItem}>{TourTwo.venue}{TourOne.cityState}</p>
                    <p className={styles.TourItem}>{TourTwo.desc}</p>
                  </div>
                  <div className={styles.TourItems}>
                    <p className={styles.TourItem}>{TourThree.date}</p>
                    <p className={styles.TourItem}>{TourThree.venue}{TourOne.cityState}</p>
                    <p className={styles.TourItem}>{TourThree.desc}</p>
                  </div>
                  <div className={styles.TourItems}>
                    <p className={styles.TourItem}>{TourOne.date}</p>
                    <p className={styles.TourItem}>{TourOne.venue}{TourOne.cityState}</p>
                    <p className={styles.TourItem}>{TourOne.desc}</p>
                  </div>
                  <div className={styles.TourItems}>
                    <p className={styles.TourItem}>{TourOne.date}</p>
                    <p className={styles.TourItem}>{TourOne.venue}{TourOne.cityState}</p>
                    <p className={styles.TourItem}>{TourOne.desc}</p>
                  </div>
                  <div className={styles.TourItems}>
                    <p className={styles.TourItem}>{TourOne.date}</p>
                    <p className={styles.TourItem}>{TourOne.venue}{TourOne.cityState}</p>
                    <p className={styles.TourItem}>{TourOne.desc}</p>
                  </div>

              </div>
            </Aux>

        )
       
    }
}


export default Tour;




// Object.keys(TourDate).map(key => {

//     console.log('key name = ', key);
 
//     TourDate[key].map(el => {
//         return (
//             <div className={styles.Tour}>   
//             {el}
//             </div>
//         )
        
//     })
//  })