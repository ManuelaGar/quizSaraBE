import MailchimpSubscribe from 'react-mailchimp-subscribe'

import NewsletterForm from '../NewsletterForm/NewsletterForm'

function Subscription () {
  const url = 'https://theberershop.us14.list-manage.com/subscribe/post?u=6c9e300658acdb2e68320ce34&amp;id=f5baf71dca'

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) => {
        return (
          <NewsletterForm
            status={status}
            onValidated={(formData) => subscribe(formData)}
          />
        )
      }}
    />
  )
}

export default Subscription
