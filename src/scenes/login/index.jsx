import { Box, colors, Typography } from "@mui/material";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";


import { FacebookBButton } from "../../utils/FacebookSdk";

export const Login = ()=>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div
        style={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent:"center",
            alignItems:"center",
            padding: "10%"
        }}
        >
                <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mixWidth="50px"
                padding={"15px"}
                borderRadius={"12px"}
                >
                    <img style={{borderRadius: '12px'}} src="/logo_sigiuri.jpeg"  width="30%" height="50%"></img>
                    <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    alignItems="center"
                    >
                        
                        <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "0 0 5px 0" }}
                        >
                            SEGIURI 
                        </Typography>

                        <Typography
                        variant="h5"
                        textAlign={"center"}
                        color={colors.grey[100]}
                    
                        sx={{ m: "0px 10px 25px 10px" }}
                        >
                        Automatiza tu servicio al cliente, escala más ventas y gana más dinero.
                        </Typography>
                        <FacebookBButton></FacebookBButton>
                        {/* <FacebookButton></FacebookButton> */}
                    </Box>
                </Box>
        </div>
            
   
        
      
        
    );
}