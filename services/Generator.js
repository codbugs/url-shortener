import { nanoid } from 'nanoid';

export default function Generator() {
    return {
        create(data) {
            const id = nanoid();
            return id;
        }
    };
}