import lupa from '../images/lupa.jpg';
export default function SearchBar() {
  return (
    <div className='search-wrapper' style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div className='search-box' style={{ width: 500 }}>
        <input className='search-text' name='q' placeholder='Search...' type='text'/>
        <button className='search-button' type='submit'>
          <img src={lupa} className="lupa" alt="lupa" style={{ width: 20, height: 20, display: 'flex'}}/>
        </button>
      </div>
    </div>
  );
}
 