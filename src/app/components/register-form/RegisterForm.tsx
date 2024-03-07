import './RegisterForm.scss'
import { ChangeEvent, FormEvent, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApiUser } from '../../hooks/useApiUser';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../store/slices/user/userSlice';
import { reducerErrorForm, reducerForm } from '../../utils/reducers';
import { initialErrorForm, initialForm } from '../../utils/initialValues';


export const RegisterForm = () => {
    const navigate = useNavigate();
    const { data, error } = useApiUser();
    const userDispatch = useDispatch();
    const [stateForm, dispatchForm] = useReducer(reducerForm, initialForm);
    const [errorForm, dispatchErrorForm] = useReducer(reducerErrorForm, initialErrorForm)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!error && errorForm.every(form => form.isValid === true)) {
            userDispatch(currentUser({ ...data, ...stateForm }));
            navigate('/offers');
        }
    };
    const handleChange = (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        dispatchForm({
            type: 'inputChange',
            field: e.target.name,
            payload: e.target.value,
        });
        if (e.target.value.length < 8) {
            dispatchErrorForm({
                type: 'inputError',
                field: e.target.name,
                payload: e.target.value,
            });
        } else {
            dispatchErrorForm({
                type: 'inputValid',
                field: e.target.name,
                payload: e.target.value,
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} className="form-section">
            <div className="form-section__document">
                <select name="typeDocument" onChange={handleChange}>
                    <option value="DNI">DNI</option>
                    <option value="CE">CE</option>
                </select>
                <div className="form-section__input-container">
                    <input
                        className="form-section__input-text--half"
                        type="number"
                        name="documentNumber"
                        value={stateForm.documentNumber}
                        onChange={handleChange}
                        id="documentNumber"
                        required
                    />
                    <label
                        htmlFor="documentNumber"
                        className={
                            stateForm.documentNumber
                                ? 'form-section__input-container--filled'
                                : 'form-section__input-container--empty'
                        }
                    >
                        Nro de Documento
                    </label>
                </div>
            </div>
            <span className='form-section__input-container--no-valid' style={{ visibility: errorForm?.find(v => v.field === 'documentNumber')?.isValid ? 'hidden' : 'visible' }}>*El documento ingresado no es válido.</span>
            <div className="form-section__input-container">
                <input
                    className="form-section__input-text"
                    type="number"
                    name="phoneNumber"
                    value={stateForm.phoneNumber}
                    onChange={handleChange}
                    id="phoneNumber"
                    required
                />
                <label
                    htmlFor="phoneNumber"
                    className={
                        stateForm.phoneNumber
                            ? 'form-section__input-container--filled'
                            : 'form-section__input-container--empty'
                    }
                >
                    Nro de Celular
                </label>
                <span className='form-section__input-container--no-valid' style={{ visibility: errorForm?.find(v => v.field === 'phoneNumber')?.isValid ? 'hidden' : 'visible' }}>*El celular ingresado no es válido.</span>
            </div>

            <div className="form-section__document">
                <input
                    className="form-section__checkbox"
                    type="checkbox"
                    name="check1"
                    id="check1"
                    required
                />
                <label className="form-section__label" htmlFor="check1">
                    Acepto lo Política de Privacidad
                </label>
            </div>
            <div className="form-section__document">
                <input
                    className="form-section__checkbox"
                    type="checkbox"
                    name="check2"
                    id="check2"
                    required
                />
                <label className="form-section__label" htmlFor="check2">
                    Acepto la Política Comunicaciones Comerciales
                </label>
            </div>
            <a href="#top" className="form-section__terms">
                Aplican Términos y Condiciones.
            </a>
            <button type="submit">Cotiza Aqui</button>
        </form>
    )
}
