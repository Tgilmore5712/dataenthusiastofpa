export default function SEO({ title, description }){
  const fullTitle = title ? `${title} — Data Enthusiast of PA` : 'Data Enthusiast of PA'
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Data analysis, visualization, and projects from Pennsylvania.'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Data analysis, visualization, and projects from Pennsylvania.'} />
    </>
  )
}
