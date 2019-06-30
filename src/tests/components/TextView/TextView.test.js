import TextView from '../../../components/Atoms/TextView';

describe('<TextView /> tests', function () {
    it('renders label', function () {
        const wrapper = shallow(<TextView>Hello World!</TextView>);

        expect(wrapper.find('.text-view')).to.have.length(1);
    });
});