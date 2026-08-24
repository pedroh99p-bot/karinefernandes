import { karineFernandesContabilidadeProspect } from "./configs/karine-fernandes-contabilidade";
import { resolveProspect } from "./resolve-prospect";

export const defaultProspectSlug = karineFernandesContabilidadeProspect.slug;

export const prospectInputs = [karineFernandesContabilidadeProspect] as const;

export const prospectRegistry = prospectInputs.map((prospect) => resolveProspect(prospect));

export function getProspectBySlug(slug: string) {
  return prospectRegistry.find((prospect) => prospect.slug === slug) ?? null;
}

export function getAllProspectSlugs() {
  return prospectRegistry.map((prospect) => prospect.slug);
}

export function getIndexableProspects() {
  return prospectRegistry.filter((prospect) => prospect.canIndex && prospect.seo.canonical);
}

export function getDefaultProspectSlug() {
  return defaultProspectSlug;
}
