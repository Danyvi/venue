import React from 'react'

export default function Location() {
  return (
    <div className="location_wrapper">
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.2120069366065!2d-123.30290314951382!3d44.91902397899567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eaa817d470e125%3A0xa4e5f0a44a466238!2sDallas%20Aquatic%20Center!5e0!3m2!1sen!2sit!4v1566839515829!5m2!1sen!2sit" 
          width="100%" 
          height="500px " 
          frameBorder="0" 
          allowFullScreen
        ></iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
    </div>
  )
}




