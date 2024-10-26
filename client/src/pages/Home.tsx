// import cx from 'clsx'
import { AspectRatio, Button, Flex, Grid, Image, Stack } from '@mantine/core'
import { Link, Outlet } from 'react-router-dom'
import InveImg from '../image/Inve4.avif'
import InveImgTwo from '../image/Inve5.png'

const Home = () => {
  return (
    <div className="mx-8">
      <div className="h-24">
        {/* <Container> */}
        <Grid className="pt-6 pr-14  w-full max-w-full">
          <Grid.Col span={7} className="flex ">
            <Grid.Col span="auto">
              <Image
                src={InveImgTwo}
                alt="Logo"
                width={1} // Adjust width as needed
                fit="contain" // or "cover" based on your preference
              />
            </Grid.Col>
            <Grid.Col
              span={10}
              className="text-3xl text-center text-customOnes"
            >
              <p className="flex items-start">InveTraker</p>
            </Grid.Col>
          </Grid.Col>

          <Grid.Col
            className="py-5 text-base text-customOne cursor-pointer transition duration-300  hover:text-teal-500 uppercase flex item-center "
            span="auto"
          >
            <Link to={''}> Home </Link>
          </Grid.Col>
          <Grid.Col
            className="py-5 text-base text-customOne  cursor-pointer transition duration-300  hover:text-teal-500 uppercase flex item-center gap-5"
            span="auto"
          >
            <Link to={''}> About us </Link>
          </Grid.Col>
          <Grid.Col
            className="py-5 text-base text-customOne  cursor-pointer transition duration-300  hover:text-teal-500 uppercase flex item-center gap-5"
            span="auto"
          >
            <Link to={''}> Info </Link>
          </Grid.Col>
          <Grid.Col
            className="py-5 text-base text-customOne  cursor-pointer transition duration-300  hover:text-teal-500 uppercase flex item-center gap-5"
            span="auto"
          >
            <Link to={'/signin'}> Login </Link>
          </Grid.Col>
          <Grid.Col
            className="py-5 text-base text-customOne  cursor-pointer transition duration-300  hover:text-teal-500 uppercase flex item-center gap-5"
            span="auto"
          >
            <Link to={'/signup'}>Signup</Link>
          </Grid.Col>
        </Grid>
        {/* </Container> */}
      </div>
      <div className="mt-16">
        <Grid>
          <Grid.Col
            className="flex items-center text-customOne text-center"
            span={4}
          >
            <Stack className="gap-14">
              <p className="text-6xl text-center text-customOnes">
                Inventroy Management System
              </p>
              <p>
                Our Inventory Management System (IMS) website simplifies stock
                tracking and management for businesses. With a user-friendly
                interface, users can easily add, update, and remove inventory
                items.
              </p>
              <Button className="w-32 ml-32" variant="filled" color="indigo">
                Learn More
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col className="h-full w-full" span={8}>
            <img className=" h-full w-full object-cover" src={InveImg} alt="" />
          </Grid.Col>
        </Grid>
      </div>
    </div>
  )
}

export default Home

// <div>
// <hr className="w-44 sm:w-72 m-96 h-px my-8 mx-auto bg-gray-700 rounded border-0 dark:bg-gray-700 "></hr>

// <div className="md:grid md:grid-cols-2 mb-5 gap-6 ">
//   <div className="pl-8 pr-8 py-4">
//     {/* <p>About us</p> */}
//     <h1 className="text-4xl py-4 text-[#181D38]">
//       Welcome to InveTraker
//     </h1>
//     <div className="text-[#52565B]">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
//         quasi eveniet aperiam?Earum quibusdam fuga doloremque, corrupti
//         officia libero ea saepe alias ipsa dolore rem vitae, sunt
//         corporis. Placeat, mollitia.
//       </p>
//       <p className="py-4">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
//         quasi eveniet aperiam?Earum quibusdam fuga doloremque, corrupti
//         officia libero ea saepe alias ipsa dolore rem vitae, sunt
//         corporis. Placeat, mollitia.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="mx-10 md:ml-40 md:py-4">
//   {/* <img src={img4} alt="" /> */}
// </div>
// </div>

// <div>
//   <p className="text-xl text-red-700">Welcom</p>
//   <br />
//   <br />
//   <Link to={'/signin'}> Signin </Link>
//   <br />
//   <Link to={'/signup'}>Signup</Link>
//   <Outlet />
// </div>
