import { Box, Flex, Text, Heading, Grid, VStack, GridItem } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

export function Story({ ...props }) {
  const [columns, setColumns] = useState(2)

  useEffect(() => {
    if (window) {
      adjustColumns()
      window.addEventListener('resize', adjustColumns)
    }
  }, [window, window.innerWidth])

  function adjustColumns() {
    if (window.innerWidth < 800) {
      setColumns(1)
    } else {
      setColumns(2)
    }
  }

  return (
    <Box>
      <Flex direction='column' gap={10} width='100%' padding={20} {...props}>
        <Grid gridTemplateColumns={`repeat(${columns}, 1fr)`} gap={10} width='100%'>
          <GridItem display='flex' flexDir='column' align='left' gap={4} order={1}>
            <Heading>Our Story</Heading>
            <Text>
              In October 2020, a development service DAO by the name of RaidGuild realized they had a problem: there was no easy, or affordable, way to safely transact with their web3 clients.
            </Text>
            <Text>
              Without the safeguards of the traditional banking system, a simple mistake when transferring cryptocurrencies could result in all funds being lost forever. Not ideal for the DAO, or the client.
            </Text>
            <Text fontWeight={700} fontStyle='italic'>
              An invoicing system was needed.
            </Text>
            <Text>
              But that wasn’t enough. 
            </Text>
            <Text>
              In the web3 world, it’s normal to “do business” with people you don’t know, and who don’t share their real identity with you.
            </Text>
            <Text>
              So there needed to be a way to ensure the service provider didn’t run away with the money, and the client didn’t run away without paying.
            </Text>
            <Text fontWeight={700} fontStyle='italic'>
              An escrow system was needed.
            </Text>
            <Text>
              But that still wasn’t enough.
            </Text>
            <Text>
              What if there was a dispute? How would the funds get released from escrow? Who would make that decision, and would they be unbiased?
            </Text>
          </GridItem>
          <GridItem order={2}>
            <Box background='gray' minH={300} />
          </GridItem>
          <GridItem order={columns === 1 ? 4 : 3}>
            <Box background='gray' minH={300} />
          </GridItem>
          <GridItem display='flex' flexDir='column' align='left' gap={4} order={columns === 1 ? 3 : 4}>
            <Text fontWeight={700} fontStyle='italic'>
              Integrated arbitration was needed.
            </Text>
            <Text>
              But that still wasn’t enough.
            </Text>
            <Text>
              Who would control this invoicing, escrow, and arbitration tool? Would there be a conflict of interest if the DAO controlled the technology behind the payment system, and was the service provider? 
            </Text>
            <Text fontWeight={700} fontStyle='italic'>
              Smart contracts were needed.
            </Text>
            <Text>
              So a team of RaidGuild developers began building a tool that combined cryptocurrency invoicing, escrow, arbitration, and smart contracts. 
            </Text>
            <Text fontWeight={700}>
              The result was an internal tool called Smart Escrow. 
            </Text>
            <Text>
              It solved the DAO’s biggest challenges when transacting with web3 clients, and was provably safe to use. This tool proved to be so effective and popular with clients, that the DAO decided to create a public version that anyone online could use, even if they were not part of the RaidGuild DAO.
            </Text>
            <Text fontWeight={700}>
              And so… Smart Invoice was born.
            </Text>
          </GridItem>
          <GridItem display='flex' flexDir='column' align='left' gap={4} order={5}>
            <Text>
              As time went by, several members of the DAO realized Smart Invoice was just a bit too difficult to use by non-developers. And that it didn’t provide similar functionality to the web2 software most freelancers already used. 
            </Text>
            <Text>
              So this new team of 4 decided to reboot Smart Invoice to make it even more powerful and easier to use, so that any freelancer, anywhere, could safely get paid for their work with cryptocurrency.
            </Text>
            <Text>
              MolochDAO supported the team’s vision and awarded them with a grant so they could build the ultimate crypto invoicing and escrow tool as a public good.
            </Text>
            <Text fontWeight={700}>
              Since then, the team has been working hard to build the Smart Invoice you see today.
            </Text>
          </GridItem>
          <GridItem order={6}>
            <Box background='gray' minH={300} />
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  )
}