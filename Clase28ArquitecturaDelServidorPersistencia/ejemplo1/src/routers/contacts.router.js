import { Router } from 'express';
import { contactsRepository } from '../repositories/index.js';

const router = Router();
const contacts = contactsRepository;

router.get('/', async (req, res) => {
    const result = await contacts.getContacts();
    res.json({ status: 'ok', payload: result });
});

router.get('/:id', async (req, res) => {
    const contact = await contacts.getById(req.params.id);
    res.json({ status: 'ok', payload: contact });
});

router.post('/', async (req, res) => {
    await contacts.createContact(req.body);
    res.json({ status: 'ok' });
});

router.put('/:id', async (req, res) => {
    await contacts.updateContact(req.params.id, req.body);
    res.json({ status: 'ok' });
});

router.delete('/:id', async (req, res) => {
    await contacts.deleteContact(req.params.id);
    res.json({ status: 'ok' });
});

export default router;