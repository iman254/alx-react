import './utils';
import { getFullYear, getLatestNotification, getfooterCopy } from './utils';

test('returns current year', ()=> {
    expect(getFullYear()).toBe(2023);
});

test('returns the correct string when the argument is true or false', ()=> {
    expect(getfooterCopy("true")).toBe("Holberton School");
    expect(getfooterCopy("false")).toBe("Holberton School main dashboard")
});

test('returns the right notification', ()=> {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});