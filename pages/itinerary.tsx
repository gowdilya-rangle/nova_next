import CitySearch from '../components/citySearch';

function ItineraryPage() {
    return(<div>
        <h1>First Post</h1>
        <CitySearch/>
    </div>)
}
  
export default ItineraryPage

// //SSR
// // This gets called on every request 
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://.../data`)
//     const data = await res.json()
  
//     // Pass data to the page via props
//     return { props: { data } }
//   }
  