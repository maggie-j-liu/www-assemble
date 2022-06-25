import { Box, Heading, Text, Grid, Flex } from 'theme-ui'
import Icon from '@hackclub/icons'

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export const Hero = () => {
    return (
        <Box
          id="header"
          sx={{
            py: 6,
            
          }}
        >
            <Box sx={{ maxWidth: '1200px', margin: '0px auto', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
                <Heading variant="headline" sx={{
                    textTransform: 'uppercase',
                    color: 'white',
                    my: 0
                }}>
                    Hackers,
                </Heading>
                <Heading variant="ultratitle" sx={{
                    textTransform: 'uppercase',
                    pb: 4,
                    fontFamily: 'Space Grotesk',
                    color: '#fa4639',
                    WebkitTextFillColor:  '#fa4639', /* Will override color (regardless of order) */
                    WebkitTextStrokeWidth: '2px',
                    WebkitTextStrokeColor: '#fa4639',
                    fontWeight: 'heavy',
                    textShadow: 'elevated'
                }}>
                    Assemble!
                </Heading>
                <Flex sx={{flexDirection: ['column', 'row', 'row']}}>
                    <CalendarDate
                        date={new Date('Aug 5 2022 06:00')}
                        topBackgroundColor="#0b1a2e"
                        bottomBackgroundColor="#FFF8F299"
                        bottomColor='black'
                        duration={2}
                    />
                    <Box sx={{
                        p: [4, 2, 2],
                        px: ['0px', 4, 4],
                        color: 'white'
                    }}>
                        <Grid columns={[1, 2, 2]}>
                            <Stat icon="pin" stat="Figma HQ in San Francisco" bg="red" />
                            <Stat icon="clock" stat="Doors Open at 6PM" bg="orange" />
                            <Stat icon="friend" stat="150+ Hackers" bg="blue" />
                            <Stat icon="send" stat="$40k in Travel Stipends" bg="green" />
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}


export const CalendarDate = ({ duration, date, color = 'white', topColor = color, bottomColor = color, backgroundColor, topBackgroundColor = backgroundColor, bottomBackgroundColor = backgroundColor }) => {
    const month = months[date.getMonth()].substring(0, 3);
    const startDay = date.getDate();
    const endDay = startDay + duration;

    return (
        <Box style={{ 
            width: '125px',
            border: '3px solid ' + color,
            borderRadius: '12px'
        }}>
            <Box style={{
                width: '100%',
                borderBottom: '3px solid white',
                textAlign: 'center',
                padding: '8px',
                fontFamily: 'Space Grotesk',
                color: topColor,
                borderTopLeftRadius: '9px',
                borderTopRightRadius: '9px',
                backgroundColor: topBackgroundColor
            }}>
                <Heading sx={{ textTransform: 'uppercase' }}>{month}</Heading>
            </Box>

            <Box style={{
                textAlign: 'center',
                padding: '8px',
                color: bottomColor,
                backgroundColor: bottomBackgroundColor
            }}>
                <Heading variant="ultratitle" sx={{ color: bottomColor, fontSize: '70px!important' }}>{startDay}</Heading>
            </Box>
        </Box>
    )
}

export const Stat = ({ stat, icon, bg }) => {
    return (
        <Text sx={{
            verticalAlign: 'bottom',
            fontSize: '20px',
            fontWeight: 600,
            background: bg || 'green',
            p: 2,
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pr: 3
        }}>
            <Icon glyph={icon} size={32} style={{
                verticalAlign: 'middle'
            }} />
            {stat}
        </Text>
    )
}