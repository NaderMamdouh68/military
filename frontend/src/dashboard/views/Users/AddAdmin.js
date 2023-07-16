import AddUser from "../../components/AddUser";
import { travelerInputs } from "../../FormSource";

const AddAppointment = () => {

    return (
        <div>
            <AddUser inputs={travelerInputs} title={"Add New Traveler"} />
        </div>
    );
}

export default AddAppointment