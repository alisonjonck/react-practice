import FormAssinatura from "../../../components/Mols/FormAssinatura";

describe('<FormAssinatura /> tests', function () {

    afterEach(function () {
        sinon.restore();
    });

    it('renders form', function () {
        const wrapper = shallow(<FormAssinatura />);

        expect(wrapper.find('form')).to.have.length(1);
    });

    it('calls onSubmitHandler when submited', function () {
        var onSubmit = spy(FormAssinatura.prototype, 'onSubmitHandler');
        const wrapper = mount(<FormAssinatura onSubmit={onSubmit} />);

        wrapper.find('form').first().simulate('submit');

        expect(onSubmit.calledOnce).to.be.true;

        wrapper.unmount();
    });
});
