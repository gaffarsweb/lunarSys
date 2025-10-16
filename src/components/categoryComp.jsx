import react from 'react'


const CategoryComp = () => {
    const array = ['asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf',]

    return (
        <div className='flex justify-start overflow-auto gap-8 scroll-container'>
            {
                array && array.map((item, i) => (
                    <div key={i} className='flex cursor-pointer flex-col p-3 justify-center items-center'>
                        <div>
                            <img width={100} src="https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100" alt='demo' />
                        </div>
                        <div>
                            <p className='font-bold'>Staples</p>
                        </div>
                    </div>
                ))
            }
        </div>


    )
};
export default CategoryComp;