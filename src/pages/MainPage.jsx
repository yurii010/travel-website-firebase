import { MainPageHeader } from '../components/MainPageHeader';
import { Service } from '../components/Service';
import { Distinations } from '../components/Distinations';
import { Packages } from '../components/Packages';
import { NextTrip } from '../components/NextTrip';
import { EmailForm } from '../components/EmailForm';

export const MainPage = () => {
    return (
        <div>
            <MainPageHeader />
            <Service />
            <Distinations />
            <Packages />
            <NextTrip />
            <EmailForm />
        </div>
    );
};
