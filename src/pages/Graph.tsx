import {
    QueryClient,
    QueryClientProvider
  } from '@tanstack/react-query'
import Graph from '../components/Graph'

  
const queryClient = new QueryClient()


 const GraphWrapper = () => {
    return(
    <QueryClientProvider client={queryClient}>
    <Graph />
    </QueryClientProvider>

    )
 }

export default GraphWrapper;