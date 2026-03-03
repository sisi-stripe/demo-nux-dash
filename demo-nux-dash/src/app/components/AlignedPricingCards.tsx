import { useEffect } from 'react';

export function AlignedPricingCards({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add click handlers for breadcrumbs
    const setupBreadcrumbs = () => {
      const breadcrumbs = document.querySelectorAll('[data-name="Root"], [data-name="Level 1"], [data-name="Level 2"]');
      breadcrumbs.forEach((breadcrumb, index) => {
        const element = breadcrumb as HTMLElement;
        element.onclick = () => {
          const names = ['Settings', 'Plans and fees', 'Stripe Scale'];
          console.log(`Navigating to: ${names[index]}`);
          alert(`You clicked: ${names[index]}`);
        };
      });
    };

    // Add click handlers for buttons
    const setupButtons = () => {
      const buttons = document.querySelectorAll('[data-name="Button"]');
      buttons.forEach((button) => {
        const element = button as HTMLElement;
        
        // Find the plan name from the card
        const planCard = element.closest('[data-name="Stripe Scale Card"]');
        let planName = 'Unknown';
        
        if (planCard) {
          // Look for the title in the card
          const paragraphs = planCard.querySelectorAll('p');
          for (const p of paragraphs) {
            const text = p.textContent?.trim();
            if (text === 'Starter' || text === 'Plus' || text === 'Pro') {
              planName = text;
              break;
            }
          }
        }
        
        element.onclick = (e) => {
          e.stopPropagation();
          console.log(`Starting plan: ${planName}`);
          alert(`🎉 Starting your ${planName} plan!\n\nThis would normally:\n• Create your account\n• Set up your payment plan\n• Take you to the dashboard`);
        };
      });
    };

    // Add click handlers for product icons
    const setupProductIcons = () => {
      const icons = document.querySelectorAll('[data-name="Product icons"]');
      icons.forEach((icon) => {
        const element = icon as HTMLElement;
        const textContent = element.textContent?.trim();
        
        element.onclick = (e) => {
          e.stopPropagation();
          if (textContent) {
            console.log(`Product clicked: ${textContent}`);
            alert(`📊 ${textContent}\n\nClick to learn more about this Stripe product.`);
          }
        };
      });
    };

    // Add click handlers for checklist items
    const setupChecklistItems = () => {
      const items = document.querySelectorAll('[data-name="Checklist item"]');
      items.forEach((item) => {
        const element = item as HTMLElement;
        element.style.cursor = 'pointer';
        
        element.onclick = (e) => {
          e.stopPropagation();
          const title = element.querySelector('p:first-of-type')?.textContent;
          const description = element.querySelector('p:last-of-type')?.textContent;
          
          if (title) {
            console.log(`Feature clicked: ${title}`);
            alert(`✨ ${title}\n\n${description || 'More information about this feature.'}`);
          }
        };
      });
    };

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setupBreadcrumbs();
      setupButtons();
      setupProductIcons();
      setupChecklistItems();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
