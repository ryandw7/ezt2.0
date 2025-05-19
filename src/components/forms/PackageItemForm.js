import React from 'react';

import { useCurrentSelectors } from '../../context/selectors';
import { useNewCoreSelectors } from '../../context/selectors';

const PackageItemForm = ({ isNew, id, handleChange }) => {

    const { currentServicesItemById } = useCurrentSelectors();
    const { newCoreServicesItemById } = useNewCoreSelectors();

    let item = {};

    if (!isNew) {
        item = currentServicesItemById(id);
    } else {
        item = newCoreServicesItemById(id);
    }

    const {
        description,
        cost,
        additionalNotes
    } = item;

    return (
        <Paper sx={{ margin: '5px auto', width: '90%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    sx={{ width: '70%', margin: '5px' }}
                    name="description"
                    variant="outlined"
                    label="Item Description"
                    placeholder={isNew ? 'Example Xfinity Gigabit Internet' : "Example: Competitor Internet"}
                    value={description}
                    onChange={handleChange(id)}
                />
                <TextField
                    sx={{ width: '20%', margin: '5px' }}
                    name="cost"
                    variant="outlined"
                    label="Cost"
                    placeholder='$'
                    value={cost !== 0 ? cost : ''}
                    onChange={handleChange(id)}
                />
            </Box>
            <TextField
                fullWidth
                minRows={3}
                name="additionalNotes"
                variant="outlined"
                label="Additional Notes"
                placeholder='Example: 1000mbps Download Speed'
                value={additionalNotes}
                onChange={handleChange(id)}
            />
        </Paper>
    )
};

export default PackageItemForm;