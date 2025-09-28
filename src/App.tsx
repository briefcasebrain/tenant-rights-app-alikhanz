import { Header } from "./components/Header"
import { TenantRightsCard } from "./components/TenantRightsCard"
import { ChatInterface } from "./components/ChatInterface"

const tenantRightsData = [
  {
    title: "Can my landlord lock me out of my apartment?",
    excerpt:
      "No, your landlord cannot legally lock you out of your apartment in New York. Self-help evictions are illegal and violate tenant protection laws.",
    fullContent:
      "Under New York State law, landlords are prohibited from using self-help eviction methods, which include changing locks, removing doors, shutting off utilities, or physically removing tenants or their belongings.\n\nIf your landlord locks you out, you have several legal remedies available. You can contact local authorities, file a complaint with housing court, or seek emergency relief. The landlord may face significant penalties including fines and being required to pay damages to you.\n\nEven if you are behind on rent or have violated your lease, your landlord must go through the proper legal eviction process through the housing court system. This process ensures your rights are protected and gives you the opportunity to defend yourself.",
  },
  {
    title: "Illegal eviction laws and tenant protections",
    excerpt:
      "New York has strong laws protecting tenants from illegal eviction practices. Understanding these protections can help you know your rights.",
    fullContent:
      "Illegal eviction, also known as self-help eviction, occurs when a landlord tries to remove a tenant without going through the proper legal channels. This includes changing locks, removing personal property, shutting off utilities, or using intimidation tactics.\n\nTenants who experience illegal eviction may be entitled to triple damages, attorney's fees, and immediate restoration to their apartment. The law recognizes that housing is a basic necessity and provides strong protections.\n\nIf you believe you're facing an illegal eviction, document everything, contact a tenant's rights organization, and consider filing a complaint with the Division of Housing and Community Renewal (DHCR) or local housing court.",
  },
  {
    title: "Your rights during the lockout process",
    excerpt:
      "If you've been locked out illegally, you have immediate rights and remedies available under New York tenant protection laws.",
    fullContent:
      "If you've been illegally locked out, you have the right to immediate restoration to your apartment. You should first document the lockout with photos and written records of what happened.\n\nContact local law enforcement to file a report, as illegal lockout is a criminal offense in many jurisdictions. You can also seek emergency relief from the housing court, which may order your immediate restoration.\n\nYou have the right to collect damages from your landlord, including the cost of temporary housing, moving expenses, and potentially punitive damages. Keep all receipts and documentation of expenses incurred due to the illegal lockout.\n\nMany tenant advocacy organizations provide free legal assistance for lockout cases, as these are considered urgent housing emergencies.",
  },
  {
    title: "Housing court information and procedures",
    excerpt:
      "Understanding how housing court works can help you navigate the legal system and protect your rights as a tenant.",
    fullContent:
      "Housing court handles landlord-tenant disputes, including eviction cases, rent disputes, and habitability issues. In New York City, there are specialized housing courts in each borough.\n\nIf you receive an eviction notice, you have the right to appear in court and defend yourself. You can raise defenses such as improper notice, landlord harassment, or breach of warranty of habitability.\n\nFree legal services are available for qualifying tenants through organizations like Legal Aid Society and Housing Court Help Center. These services can help you understand your case and represent you in court.\n\nThe court process includes several steps: petition filing, service of papers, answer deadline, discovery, and trial. Understanding these steps can help you prepare and protect your rights throughout the process.",
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-sm mx-auto px-4 py-6">
        <div className="space-y-4">
          {tenantRightsData.map((item, index) => (
            <TenantRightsCard key={index} title={item.title} excerpt={item.excerpt} fullContent={item.fullContent} />
          ))}
        </div>

        <div className="mt-8 pb-6">
          <ChatInterface />
        </div>
      </main>
    </div>
  )
}
