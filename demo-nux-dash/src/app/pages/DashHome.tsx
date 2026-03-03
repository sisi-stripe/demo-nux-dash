import StripeScale from '../../imports/StripeScale';
import { AlignedPricingCards } from '../components/AlignedPricingCards';

export default function DashHome() {
  return (
    <div data-name="NewUserHomePage" style={{ height: '100%' }}>
      <AlignedPricingCards>
        <StripeScale />
      </AlignedPricingCards>
    </div>
  );
}
