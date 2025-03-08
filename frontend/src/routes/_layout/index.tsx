// import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router";
import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export const Route = createFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  return (
    <Map
    initialViewState={{
      longitude: -74.006,
      latitude: 40.7128,
      zoom:10,
    }}
    style={{ width: "100vw", height: "100vh" }}
    mapStyle="https://demotiles.maplibre.org/style.json"/>
  );
}

// import useAuth from "@/hooks/useAuth"

// export const Route = createFileRoute("/_layout/")({
//   component: Dashboard,
// })

// function Dashboard() {
//   const { user: currentUser } = useAuth()

//   return (
//     <>
//       <Container maxW="full">
//         <Box pt={12} m={4}>
//           <Text fontSize="2xl" truncate maxW="sm">
//             Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
//           </Text>
//           <Text>Welcome back, nice to see you again!</Text>
//         </Box>
//       </Container>
//     </>
//   )
// }
