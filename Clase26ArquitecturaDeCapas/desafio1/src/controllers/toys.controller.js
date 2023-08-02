export const getAllToys = async (req, res) => {
    res.send('Get all toys');
};

export const getToyById = async (req, res) => {
    res.send('Get toy by id');
};

export const createToy = async (req, res) => {
    res.send('Create toy');
};

export const updateToy = async (req, res) => {
    res.send('Update toy');
};

export const deleteToy = async (req, res) => {
    res.send('Delete toy');
};
