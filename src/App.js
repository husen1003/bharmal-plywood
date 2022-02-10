function App() {
    return (
        <div className="flex flex-wrap">
            <div className='flex flex-1 justify-center items-center h-screen bg-dark text-light'>
                <h1 className='font-playfair'>Hello World</h1>
            </div>
            <div className='flex flex-1 justify-center items-center h-screen bg-light text-dark'>
                <h1 className='font-playfair'>Hello World</h1>
            </div>
            <div className='flex w-screen justify-center items-center h-screen bg-main text-light'>
                <h1 className='font-playfair'>Hello World</h1>
            </div>
        </div>
    );
}

export default App;
