import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useNewCoreActions from '../context/actions/useNewCoreActions';
import { Box, Typography } from '../../node_modules/@mui/material/index';
import { test_lines } from '../utils';

const NewServicePackagePopup = () => {

    const mockData = {
        serviceTypes: {
            internet: {
                serviceTiers: {
                    "300 Mbps": { edp: 80, name: "300 Mbps", deals: [] },
                    "500 Mbps": { edp: 95, name: "500 Mbps" },
                    "1 Gig": { edp: 110, name: "1 Gig" },
                    "1.2 Gigs": { edp: 125, name: "1.2 Gigs" }
                },
                addons: {
                    "Xfinity Pro": { edp: 15 }
                }
            },
            tv: {
                serviceTiers: {
                    "TV Core": { name: "TV Core", edp: 65, addons: { "Entertainment": { edp: 17 } } },
                    "TV Plus": { name: "TV Plus", edp: 105 },
                    "TV Premium": { name: "TV Premium", edp: 135 }
                }
            },
            voice: {
                serviceTiers: {
                    "Xfinity Voice": { name: "Xfinity Voice", edp: 40 }
                }
            },
            home: {
                serviceTiers: {
                    "Home Security": { name: "Home Security", edp: 65 },
                    "Smart Home": { name: "Smart Home", edp: 10 }
                }
            },
            extras: {}
        }
    }

    const serviceData = mockData;

    const [selectionOptions, setSelectionOptions] = useState({
        selectedServiceType: null,
        selectedServiceTier: null,
        selectedServiceDeal: null
    });

    const setSelectedServiceType = (serviceType) => {
        console.log(serviceType)
        setSelectionOptions((prevOptions) => ({
            ...prevOptions,
            selectedServiceType: serviceType,
            selectedServiceTier: null,
            selectedServiceDeal: null
        }));
    };

    const setSelectedServiceTier = (serviceTier) => {

        console.log(serviceTier)
        setSelectionOptions((prevOptions) => ({
            ...prevOptions,
            selectedServiceTier: serviceTier,
            selectedServiceDeal: null
        }));
    };

    const setSelectedServiceDeal = (serviceDeal) => {
        setSelectionOptions((prevOptions) => ({
            ...prevOptions,
            selectedServiceDeal: serviceDeal
        }));
    };

    const mockFetchServiceDeals = (serviceType) => {
        console.log(`Fetching service deals for: ${serviceType}`);
        // Mock data fetching logic here
    }

    const mockServiceItems = [{ name: '300 Mbps' }, { name: '500 Mbps' }, { name: '1 Gig' }, { name: '1.2 Gigs' }]

    const { fetchServiceDeals = mockFetchServiceDeals } = useNewCoreActions();
    const serviceItems = mockServiceItems;
    //serviceType -> serviceTier -> serviceDeal -> serviceAddOns


    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const renderLayerOne = () => {
        const selectedService = selectionOptions.selectedServiceType;
        const serviceTiers = serviceData.serviceTypes[selectedService].serviceTiers;
        return <>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                {Object.values(serviceTiers).map((item) => (
                    <Box key={item.id} sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', marginBottom: '10px' }}>
                        <Button variant="contained" color="primary" onClick={() => fetchServiceDeals(selectionOptions.selectedServiceType, item.id)}>
                            {item.name}
                        </Button>
                    </Box>

                ))}
            </Box>
        </>
    }

    const renderLayerTwo = () => { }

    const handleServiceItemClick = (event) => {
        const serviceType = event.target.name;
        console.log(`Package clicked: ${serviceType}`);
        setSelectedServiceType(serviceType);
    }

    const isSelectedTypeButton = (id) => {
        if (!selectionOptions.selectedServiceType) {
            return
        }
        return selectionOptions.selectedServiceType === id;
    }
    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
            >
                Add Package
            </Button>
            {isOpen ? <Box sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, .75)',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                padding: '20px',
                zIndex: 1000
            }}>
                <Box sx={{
                    margin: '40% auto',
                    width: '700px',
                    height: '300px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        <Button id="internetPackage" name="internet" onClick={handleServiceItemClick} variant={isSelectedTypeButton("internet") ? "outlined" : "contained"}>Internet</Button>
                        <Button id="tvPackage" name="tv" onClick={handleServiceItemClick} variant={isSelectedTypeButton("tv") ? "outlined" : "contained"}>TV</Button>
                        <Button id="xvPackage" name="voice" onClick={handleServiceItemClick} variant={isSelectedTypeButton("voice") ? "outlined" : "contained"}>Xfinity Voice</Button>
                        <Button id="homePackage" name="home" onClick={handleServiceItemClick} variant={isSelectedTypeButton("home") ? "outlined" : "contained"}>Xfinity Home</Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        {selectionOptions.selectedServiceType ? renderLayerOne() : null}
                    </Box>
                </Box>





            </Box> : null}

        </>
    );


};
export default NewServicePackagePopup;