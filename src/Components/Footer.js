import CL from "../assets/img/CL.png"

export default function Footer () {
    return (
        <div>
            <footer class="p-10 footer bg-base-200 text-base-content">
  <div>
    <img src={CL} alt="logo" />
    <p>Catching Lightning Music
      <br />
    </p>
  </div> 
  <div>
    <span class="footer-title">Services</span> 
    <a href="/" class="link link-hover">Branding</a> 
    <a href="/" class="link link-hover">Design</a> 
    <a href="/" class="link link-hover">Marketing</a> 
    <a href="/" class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a href="/" class="link link-hover">About us</a> 
    <a href="/" class="link link-hover">Contact</a> 
    <a href="/" class="link link-hover">Jobs</a> 
    <a href="/" class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a href="/" class="link link-hover">Terms of use</a> 
    <a href="/" class="link link-hover">Privacy policy</a> 
    <a href="/" class="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    )
}